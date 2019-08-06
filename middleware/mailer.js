var axios = require("axios");

function sendMail(data, cb) {
    console.log(data);
    axios.post('https://share.rolistudio.co/sendmail', data).then(cb);
}

module.exports = {
    sendMail: (data, cb) => {
        sendMail(data, cb);
    }
}