var firebaseConfig = {
    apiKey: "AIzaSyB0O_LnnmjsB4Ucni2a6Qw9ToxP4ikTFSA",
    authDomain: "habitreminder-d891d.firebaseapp.com",
    projectId: "habitreminder-d891d",
    storageBucket: "habitreminder-d891d.appspot.com",
    messagingSenderId: "1997366263",
    appId: "1:1997366263:web:418c0a8b1b494ecb0704f2",
    measurementId: "G-KTF0VDC0NV"
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
      
      email=email.replaceAll(".", ",");
  
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