const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require('firebase-function');
const Filter = require('bad-words');

exports.detectProfanity = functions.firestore
    .document('players/{name}')
    .onCreate(async (doc, ctx) => {
        
        const filter = new Filter();
        const { name, id, time } = doc.data();

        if (filter.isProfane(name)) {
            alert("Watch your profanity")
            const cleaned = moderateSwearwords()
        }

    })

