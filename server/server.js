const express = require('express');
const bodyParser = require('body-parser');
const messagesController = require('./controllers/messages_controller');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('./../public/build'));
const baseURL = "/api/messages";

app.post(baseURL, messagesController.create);
app.get(baseURL, messagesController.read);
app.put(`${baseURL}/:id`, messagesController.update);
app.delete(`${baseURL}/:id`, messagesController.delete);

app.listen(port, () => {
  console.log('Listening on:', port)
})