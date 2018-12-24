
module.exports = (senderName) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <style type="text/css">
            /* ANDROID CENTER FIX */
            div[style*="margin: 16px 0;"] {
                margin: 0 !important;
            }
    
            a {
                text-decoration: none;
            }
        </style>
    </head>
    
    <body style="margin: 0 !important; padding: 0 !important;">
    
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
                <td bgcolor="#ffffff" style="padding: 15px;">
                    <table border="0px solid #eceff3" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px; padding: 52px; border-radius: 12px;"
                        class="responsive-table">
                        <tr>
                            <td>
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td style="font-size: 28px; font-family: Helvetica, Arial, sans-serif; color: #333333; padding-top: 30px;">Hi
                                            ${senderName},</td>
                                    </tr>
                                    <tr>
                                        <td align="left" style="padding: 20px 0 0 0; font-size: 16px; line-height: 25px; font-family: Helvetica, Arial, sans-serif; color: #666666;">Thanks
                                            for taking the time to view my webportfolio and
                                            filling out my contact form. I 'll do my best to reply to your mail in the next
                                            24 hours.</td>
                                    </tr>
                                    <tr>
                                        <td style="font-size: 20px; font-family: Helvetica, Arial, sans-serif; color: #333333; padding-top: 30px;">Binoy
                                            Sinha</td>
                                    </tr>
                                    <tr>
                                        <td style="font-size: 12px; font-family: Helvetica, Arial, sans-serif; color: #333333; padding-top: 10px;">Developer</td>
                                    </tr>
                                    <tr>
                                        <td style="font-size: 12px; font-family: Helvetica, Arial, sans-serif; color: #333333; padding-top: 8pxpx;"><a
                                                href="https://www.linkedin.com/in/binoykumarsinha">Linkedin</a> | <a href="https://www.binoysinha.com">Website</a></td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
    
                </td>
            </tr>
        </table>
    
    </body>
    
    </html>   
    `;
};