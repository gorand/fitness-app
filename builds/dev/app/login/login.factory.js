;(function(){
  'use strict';

  angular
    .module('fitness.login')
    .factory('registration', LoginFactory)
  
  // @ngInject
  function LoginFactory(dbc, $rootScope, users, $firebaseObject) {
    var fc = {};
    var auth = dbc.get$Auth();
    
    $rootScope.logout = function(){
      console.log('logout')
      auth.$unauth();
    };

    auth.$onAuth(function(authData){
      if (authData) {// Logged in
        console.log('$onAuth: Logged in ', authData);
        users.getUser(authData.uid).then(function(_user){
          console.log('onAuth', +(new Date()));
          $rootScope.currentUser = {
            uid: authData.uid,
            loggedIn: true,
            fullname: _user.name + ' ' + _user.surname
          };
          _user.$watch(function(){
            $rootScope.currentUser = {
              uid: authData.uid,
              loggedIn: true,
              fullname: _user.name + ' ' + _user.surname
            };
          });
        })
      }else{// Logged out
        console.log('$onAuth: Logged out');
        $rootScope.currentUser = {
          loggedIn: false,
          fullname: null,
          uid: null
        };
      }
    });

    fc.signin = function(_user){
      return auth.$authWithPassword(_user);
    }

    fc.signinGoogle = function(){
      return auth.$authWithOAuthPopup("google").then(function(authData) {
        var userRef = dbc.getRef().child('users').child(authData.uid);
        var userObj = $firebaseObject(userRef);
        userObj.$loaded(function(_d){
          console.log('user Object', _d);
          if(_d.registered){
            userObj.last_visit = Firebase.ServerValue.TIMESTAMP;
          }else{
            userObj.last_visit = Firebase.ServerValue.TIMESTAMP;
            userObj.name = authData.google.cachedUserProfile.given_name || "";
            userObj.surname = authData.google.cachedUserProfile.family_name || "";
            userObj.google_id = authData.google.id;
            userObj.registered = userObj.registered ? userObj.registered : Firebase.ServerValue.TIMESTAMP;
          }
          userObj.$save();
          console.log('save', +(new Date()));
        });
        console.log("Logged in as:", authData);
      }).catch(function(error) {
        console.error("Authentication failed:", error);
      });
    };

    fc.test = function(_user) {
      console.log( _user);
    }

    fc.signup = function(_user){
      return auth.$createUser({
        email   : _user.email,
        password: _user.password
      }).then(function(userData){
        console.log('User ' + userData.uid + ' created successfully!');
        var userRef = dbc.getRef().child('users').child(userData.uid);
        userRef.set({
          name: _user.name,
          surname: _user.surname,
          email: _user.email,
          registered: Firebase.ServerValue.TIMESTAMP,
          last_visit: Firebase.ServerValue.TIMESTAMP
        });
        return auth.$authWithPassword({
          email   : _user.email,
          password: _user.password
        });
      });
    }

    return fc;
  }

})();
