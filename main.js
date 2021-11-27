var firebaseConfig = {
    apiKey: "AIzaSyBKzv9PlQESIiA1eJoH9p4sLhkMBAdIeGE",
    authDomain: "habit-reminder-f7fd7.firebaseapp.com",
    databaseURL: "https://habit-reminder-f7fd7-default-rtdb.firebaseio.com",
    projectId: "habit-reminder-f7fd7",
    storageBucket: "habit-reminder-f7fd7.appspot.com",
    messagingSenderId: "502767252044",
    appId: "1:502767252044:web:715e5833dbe650839ffae9",
    measurementId: "G-LX376GXF84"
   };
   
     firebase.initializeApp(firebaseConfig);
     firebase.analytics();
   
   
   
   var contactInfo = firebase.database().ref("users");
   
   
   document.querySelector(".contact-form").addEventListener("submit", submitForm);
   
   
   function submitForm(e) {
     e.preventDefault();
   
     var name = document.querySelector(".name").value;
     var email = document.querySelector(".email").value;
     var message = document.querySelector(".message").value;
     console.log(name, email, message);
   
     saveContactInfo(name, email, message);
   
     document.querySelector(".contact-form").reset();
   
   
     document.getElementById('dis').style.visibility ='visible';
   
     setTimeout(function(){
     document.getElementById('dis').style.visibility ='visible';
     },3000);
   }
   
   function saveContactInfo(name, email, message) {
     //var newContactInfo = contactInfo.push();
   email=email.replace(".", ",")
     contactInfo.child(email).set({
       name: name,
       email: email,
       message: message,
     });
   }
   
   
   
   