const tf = require('@tensorflow/tfjs-node');

exports.generateResponse = async (message) => {
    console.log('Received message:', message);
    
    // Implementasi sederhana untuk respons chatbot
    let response;
    if (message.toLowerCase().includes("hello")) {
        response = "Hello! How can I help you with your mental health today?";
    } else if (message.toLowerCase().includes("support")) {
        response = "I'm here to support you. Can you tell me more about what you're feeling?";
    } else {
        response = "I'm sorry, I don't understand. Can you please rephrase?";
    }

    console.log('Generated response:', response);
    return response;
};
