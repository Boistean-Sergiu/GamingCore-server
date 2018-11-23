const functions = require('firebase-functions');

const admin = require('firebase-admin')

const config = require('./config')

// const serverConfig = {
//     apiKey: config.api_key,
//     authDomain: `${config.project_id}.fireapp.com`,
//     databaseURL: `https://${config.database_name}.firebaseio.com`,
//     storageBucket: `${config.bucket}.appspot.com`
// }

// admin.initializeApp(serverConfig)



admin.initializeApp({
    credential: admin.credential.cert({
        projectId: config.project_id,
        privateKey: config.api_key,
        clientEmail: 'boistean.sergiu@gmail.com'
    }), databaseURL: `https://${config.database_name}.firebaseio.com`
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
