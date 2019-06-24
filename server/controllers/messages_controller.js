const messageArr = [];
let id = 0;

module.exports = {
    
    create: (req, res) => {
        const {text, time} = req.body;
        messageArr.push({id, text, time});
        id++;
        res.status(200).send(messageArr);
    },

    read: (req,res) => {
        res.status(200).send(messageArr);
    },

    update: (req, res) => {
        const {text} = req.body;
        const idToUpdate = req.params.id;
        const messageIndex = messageArr.findIndex(targetMessage => targetMessage.id == idToUpdate);
        let message = messageArr[messageIndex];

        messageArr[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };

        res.status(200).send(messageArr);
    },

    delete: (req, res) => {
        const idToDelete = req.params.id;
        const messageIndex = messageArr.findIndex(message => message.id == idToDelete);
        messageArr.splice(messageIndex, 1);
        res.status(200).send(messageArr);
    }
}