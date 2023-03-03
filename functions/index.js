const functions = require("firebase-functions");
const admin = require("firebase-admin");

var credential = require("./sokxay.json");

admin.initializeApp({
    credential: admin.credential.cert(credential),
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.updatedHello = functions.https.onRequest(async (request, response) => {
  return response.send("Hello from Firebase!!!!!!");
});
