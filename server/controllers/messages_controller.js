let messages = [];
let id = 0;


module.exports = {
    create: (req, res) => {
        const {text, time} = req.body;
        messages.push({id, text, time});
        id++;
        res.status(201).json(messages);
    },
    read: (req, res) => {
        res.status(200).json(messages);
    },
    update: (req, res) => {
        let {text} = req.body;
        let updateId = req.params.id;
        let messageIndex = messages.findIndex(message => message.id == updateId);
        let message = messages[messageIndex];

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };
        res.status(200).json(messages)
    },
    delete: (req, res) => {
        let deleteId = req.params.id;
        let messageIndex = messages.findIndex(message => message.id == deleteId);
        messages.splice(messageIndex, 1);
        res.status(200).json(messages);
    }
};