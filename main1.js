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
   
    const app = firebase.initializeApp(firebaseConfig);
     firebase.analytics();
   
   
   //const database = getDatabase(app);
   
   
   var contactInfo = firebase.database().ref();
   
   document.querySelector("#login").addEventListener("click", submitLogin);
   
   function submitLogin(e) {
   
    contactInfo.on('value', snapshot => {    
        dbRef = firebase.database().ref();
       //alert(dbRef);
       var email = document.querySelector("#email").value;
       
       email=email.replace(".", ",");
   
     dbRef1=dbRef.child("users").child(email).child("email");
     dbRef2=dbRef.child("users").child(email).child("message");
     //alert(dbRef1);
     dbRef1.on('value', function(snapshot) {
       //console.log(snapshot.val());
       //string.localeCompare(String_2);
   
       if(snapshot.val()===null)
           alert("invalid username");
       else
           checkPwd(dbRef2);
           
   
       //snapshot.forEach(function(data) {
         //  console.log(data.key);
           //console.log(data.val());
     //  });
     
     
   });
   });
   
         //console.log();
   
   }
   function checkPwd(a){
       
       var pwd = document.querySelector("#pwd").value;
       a.on('value', function(snapshot) {
           alert(snapshot.val());
       if(snapshot.val()===pwd)
           alert("Login Successfull");
       else
           alert("Login failed");
           
           
           
           
       });
       
       
   }