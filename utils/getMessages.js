const mongoose = require('mongoose')

const getMessages = () => {
    let Message = mongoose.model('Message',{ usuario : String, data_hora : String, message : String});

    const messages = []
    Message.find({})
    .then(docs=>{
        console.log('DOCS: ' + docs);
        messages = docs;
        console.log('MESSAGES: ' + messages);
    }).catch(err=>{
        console.log(err);
    });

    return messages;
}

module.exports = {
    getMessages: getMessages
}