<<<<<<< HEAD
const express = require('express');

const router = express.Router();

const chatController = require('../controller/chat-controller');

router.get('/', chatController.getChat);

=======
const express = require('express');

const router = express.Router();

const chatController = require('../controller/chat-controller');

router.get('/', chatController.getChat);

>>>>>>> e5cc454edf8ece10371a8aa2c2142769c5584654
module.exports = router;