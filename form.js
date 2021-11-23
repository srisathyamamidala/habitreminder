// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBKzv9PlQESIiA1eJoH9p4sLhkMBAdIeGE",
    authDomain: "habit-reminder-f7fd7.firebaseapp.com",
    projectId: "habit-reminder-f7fd7",
    storageBucket: "habit-reminder-f7fd7.appspot.com",
    messagingSenderId: "502767252044",
    appId: "1:502767252044:web:715e5833dbe650839ffae9",
    measurementId: "G-LX376GXF84"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = firebase.auth();
  //signup function
  function signUp(){
      var email = document.getElementById("email");
      var password = document.getElementById("password");

      const promise = auth.createUserWithEmailAndPassword(email.Value,password.Value);
      //
      promise.catch(e=>alert(e.message));
      alert("SignUp Sucessfully");
  }
  //SignIn function
  function signIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.Value,password.Value);
    promise.catch(e=>alert(e.message));
  }
  //signOut function
  function signOut(){
      auth.signOut();
      alert("SignOut Succesfully from system");

  }
  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
      if(user){
          var email = user.email;
          alert("Active user "+email);
      }else{
          alert("No Active user Found");

      }
  })