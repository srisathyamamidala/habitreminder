
var firebaseConfig = {
  /* apiKey: "AIzaSyAnKu4gzCKQYYBbB8xDtxQ8GWJuAU8ckcM",
      authDomain: "travelinn-8527c.firebaseapp.com",
      databaseURL: "https://travelinn-8527c.firebaseio.com",
      projectId: "travelinn-8527c",
      storageBucket: "travelinn-8527c.appspot.com",
      messagingSenderId: "806456585313",
      appId: "1:806456585313:web:2aec374cc59b76f9458e20"*/
    apiKey: "AIzaSyB0O_LnnmjsB4Ucni2a6Qw9ToxP4ikTFSA",
    authDomain: "habitreminder-d891d.firebaseapp.com",
    projectId: "habitreminder-d891d",
    storageBucket: "habitreminder-d891d.appspot.com",
    messagingSenderId: "1997366263",
    appId: "1:1997366263:web:418c0a8b1b494ecb0704f2",
    measurementId: "G-KTF0VDC0NV"
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
  email=email.replaceAll(".", ",")
    contactInfo.child(email).set({
      name: name,
      email: email,
      message: message,
    });
  }
  
  
  
  