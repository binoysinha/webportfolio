
const sgMail = require('@sendgrid/mail');
const keys = require('../keys');
const AcknowledgementMail = require('../MailTemplate/AcknowledgementMail');

sgMail.setApiKey(keys.sendGridKey);

module.exports = app => {
    app.post('/sendmail', (req, res) => {
        let { message, senderEmail, senderName } = req.body;
    
        const output = `
            <p>You have a new message</p>
            <h3>Details</h3>
            <ul>  
            <li>Name: ${senderName}</li>
            <li>Email: ${senderEmail}</li>
            </ul>
            <h3>Message</h3>
            <p>${message}</p>
        `;

        const msg = {
            to: ['binay.sinha53@gmail.com', 'binoy.sinha@hotmail.com'],
            from: `WebPortfolio Account <${senderEmail}>`,
            subject: `New message from ${senderName}✔`,
            text: 'Hello plain world!',
            html: output,
          };

        const respMail = {
            to: senderEmail,
            from: 'Binoy Sinha<no-reply@webportfolio.com>',
            subject: 'Your message has been received',
            text: 'Hello plain world!',
            html: AcknowledgementMail(senderName),
        }
          sgMail
          .send(msg)
          .then(() => {
              sgMail
              .send(respMail).then(() => {
                res.status(200).send({status: 'Mail has been sent successfully'}).end();
              }).catch(err => {
                res.status(200).send({status: 'Mail has been sent successfully'}).end();
              });
            })
          .catch(error => {
        
            //Log friendly error
            console.error(error.toString());
        
            //Extract error msg
            const {message, code, response} = error;
        
            //Extract response msg
            const {headers, body} = response;
            res.status(500).end();
        });     // 
    });
}