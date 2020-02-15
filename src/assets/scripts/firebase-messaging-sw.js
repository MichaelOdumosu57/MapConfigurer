importScripts('https://www.gstatic.com/firebasejs/7.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

var messaging 
let xhr = new XMLHttpRequest();
xhr.onload= ()=>{
    let a = JSON.parse(xhr.response)
    final.apiKey = _APIKEY
    final.authDomain = _AUTHDOMAIN
    final.databaseURL = _DATABASEURL
    final.projectId = _PROJECTID
    final.storageBucket = _STORAGEBUCKET
    final.messagingSenderId = _GCM_SENDER_ID
    final.appId = _APPID
    final.measurementId = 'null'   
    firebase.initializeApp(final)    
}    
xhr.open('get', 'env-auth', false)
xhr.send()

console.log(messaging) 
messaging = firebase.messaging();


    
    
