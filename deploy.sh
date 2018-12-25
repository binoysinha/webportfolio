docker build -t vinay0079/webportfolio-client:latest -t vinay0079/webportfolio-client:$SHA -f ./client/Dockerfile ./client
docker build -t vinay0079/webportfolio-server:latest -t vinay0079/webportfolio-server:$SHA -f ./server/Dockerfile ./server

docker push vinay0079/webportfolio-client:latest
docker push vinay0079/webportfolio-server:latest

docker push vinay0079/webportfolio-client:$SHA
docker push vinay0079/webportfolio-server:$SHA

kubectl apply -f k8s
kubectl set image deployments/server-deployment server=vinay0079/webportfolio-server:$SHA
kubectl set image deployments/client-deployment client=vinay0079/webportfolio-client:$SHA
