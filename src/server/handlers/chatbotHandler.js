const chatbotService = require('../../services/chatbotService');

exports.handleChat = async (request, h) => {
    try {
        console.log('Received request payload:', request.payload);
        const { message } = request.payload;
        if (!message) {
            console.log('Message is missing in payload');
            return h.response({ error: 'Message is required' }).code(400).type('application/json');
        }
        const response = await chatbotService.processMessage(message);
        console.log('Generated response:', response);
        return h.response({ response }).code(200).type('application/json');
    } catch (error) {
        console.error('Error in handleChat:', error);
        return h.response({ error: 'Failed to process message' }).code(500).type('application/json');
    }
};
