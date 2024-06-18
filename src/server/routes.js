const chatbotHandler = require('./handlers/chatbotHandler');

module.exports = [
    {
        method: 'POST',
        path: '/chat',
        handler: chatbotHandler.handleChat
    }
];
