let messages = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    const {text, time} = req.body;
    console.log(req);
    messages.push({ id, text, time});
    id++;
    res.send(messages);
  },
  read: (req, res) => {
    res.send(messages);
  },
  update: (req, res) => {
    const index = messages.findIndex(message => {
      return message.id == req.params.id;
    })
    var message = messages[index];
    messages[index] = {
      id: message.id,
      text: req.body.text || message.text,
      time: message.time
    }
    res.send(messages);
  },
  delete: (req, res) => {
    let index = messages.findIndex(message => {
      return message.id == req.params.id;
    })
    messages.splice(index, 1);
    res.send(messages);
  }
}