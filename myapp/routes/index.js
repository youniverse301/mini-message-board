var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.post('/new', function(req, res, next) {
  const { userName, messageText } = req.body;
  console.log(userName)
  console.log(messageText)
  res.redirect('/');
  res.send(messages[messages.push({ text: messageText, user: userName, added: new Date() })]);
});

module.exports = router;
