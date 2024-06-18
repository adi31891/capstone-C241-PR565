const { Firestore } = require('@google-cloud/firestore');
const firestore = new Firestore();

exports.saveChat = async (chat) => {
    const docRef = firestore.collection('chats').doc();
    await docRef.set(chat);
};
