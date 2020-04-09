const functions = require('firebase-functions');

const app = require ('../src/server');

const api = functions
            .runWith({ memory: "2GB", timeoutSeconds:120 })
            .https.onRequest(app);
module.exports ={
    api
}