importScripts('https://www.gstatic.com/firebasejs/7.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

var messaging 
let xhr = new XMLHttpRequest();
xhr.onload= ()=>{
    let a = JSON.parse(xhr.response)
    final.apiKey = a.AF_APIKEY
    final.authDomain = a.AF_AUTHDOMAIN
    final.databaseURL = a.AF_DATABASEURL
    final.projectId = a.AF_PROJECTID
    final.storageBucket = a.AF_STORAGEBUCKET
    final.messagingSenderId = a.AF_GCM_SENDER_ID
    final.appId = a.AF_APPID
    final.measurementId = 'null'   
    firebase.initializeApp(final)    
}    
xhr.open('get', 'http://localhost:3001/env', false)
xhr.send()

console.log(messaging) 
messaging = firebase.messaging();


    
    
