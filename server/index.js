const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const keys = require('./keys');

const PORT = keys.serverPort || 5000;
const app = express();
var whitelist = ['http://localhost:5000', 'https://www.binoysinha.com']
// var corsOptions = {
//   origin: function (origin, callback) {
//       console.log(origin);
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

require('./routes/visits')(app);
require('./routes/sendmail')(app);

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});

