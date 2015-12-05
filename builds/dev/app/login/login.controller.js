;(function(){
  'use strict';

  angular
    .module('fitness.login')
    .controller('LoginCtrl', LoginController)
  
     function LoginController(registration) {
      var sc = this;

      sc.signinUser = {
        email: null,
        password: null
      };

      sc.signupUser = {
        email: null,
        password: null,
        name: null,
        surname: null
      };

      sc.signIn = function() {
        registration.signin(sc.signinUser).then(function(){

        });
      }

      sc.testClick = function() {
        registration.test(sc.signinUser);
      }

      sc.signUp = function() {
        console.log( "Press button SignUp" );
        registration.signup(sc.signupUser).then(function(){

        });
      }      
    }

})();
