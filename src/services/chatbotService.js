const tensorFlowUtils = require('../utils/tensorFlowUtils');

exports.processMessage = async (message) => {
    try {
        console.log('Processing message:', message);
        const response = await tensorFlowUtils.generateResponse(message);
        console.log('Generated response:', response);
        return response;
    } catch (error) {
        console.error('Error in processMessage:', error);
        throw new Error('Error in processing message');
    }
};
