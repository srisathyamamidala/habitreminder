 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyCVstBMVGv2MMFnfDIsM32NkyySsHUIHZs",
    authDomain: "login-e7a7c.firebaseapp.com",
    projectId: "login-e7a7c",
    storageBucket: "login-e7a7c.appspot.com",
    messagingSenderId: "28362598238",
    appId: "1:28362598238:web:8d891b7843e857d48011cf"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//Initialize variables
  const auth = firebase.auth()
  const database = firebase.database()

  //set up our register function
  function register(){
      email = document.getElementById('email').value
      password = document.getElementById('password').value
      //validate input fields
      if (validate_email(email) == false || validate_password(password) == false) {
          alert('Email or Password is Outta line')
      }
      auth.createUserWithEmailAndPassword(email, password)
      .then(function() {
          var user = auth.CurrentUser
          //Add this to firebase database
          var database_ref = database.ref()

          //Create User Data
          var user_data = {
              email : email,
              last_login : Date.now()
          }

          database_ref.child('users/' +user.uid).set(user_data)

      })
      .catch(function(error) {
          var error_code = error.code
          var error_message = error.message

          alert(error_message)
      })
    
  function validate_email(email) {
      expression = /^[@]+@\w+(\.\w+)+\w$/.test(str);
      if (expression.test(email) == true){
          return true
      
      }else {
          return false
      }

  function validate_password(password) {
      if (password < 6){
          return false
      } else {
          return true
      }
  }
}
  }

