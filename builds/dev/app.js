;(function(){
  'use strict';
  
  angular
    .module('fitness', [
      'ui.router',
      'ui.bootstrap',
      'fitness.home',
      'fitness.profile',
      'fitness.about',
      'fitness.persons',
      'fitness.users',
      'fitness.members',
      'fitness.workouts',
      'fitness.login'
    ])
    .constant('FDBURL', 'https://basecontacts.firebaseio.com/')
    .controller('MainCtrl', MainController)
    .run(MainRun)
    .config(MainConfig);

  // @ngInject
  function MainController($rootScope) {
    var that = this;

    $rootScope.root = 'Root 1';
  }
  
  // @ngInject
  function MainConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }

  // @ngInject
  function MainRun($rootScope, dbc) {
    $rootScope.logout = function() {
      console.log( 'logout' );
      dbc.get$Auth.$unauth();
    };
  }

})();

;(function() {
  'use strict'
  angular
    .module('fitness.about', [])
    .controller('AboutCtrl', AboutController)
    .config(AboutConfig)

    function AboutController() {
      console.log( 'About Page' );
    }
    function AboutConfig($stateProvider) {
      console.log( 'AboutConfig' );
      $stateProvider
        .state('about', {
          url: '/about',
          templateUrl: 'app/about/about.html',
          controller: 'AboutCtrl'
        });
    }

})();
;(function(){
  'use strict';

  angular
    .module('fitness.dbc', [
      'firebase'
    ])
    .factory('dbc', dbcFactory)

  // @ngInject
  function dbcFactory(FDBURL, $firebaseAuth) {
    var fc = {};
    var ref = new Firebase(FDBURL);
    var auth = $firebaseAuth(ref);

    fc.getRef = function() {
      return ref;
    }

    fc.get$Auth = function() {
      return auth;
    }

    return fc;
  }

})();
;(function() {
	'use strict';
	angular
		.module('fitness.home', [])
		.controller('HomeCtrl', HomeController)
		.config(HomeConfig);

  // @ngInject
	function HomeController() {
		var that = this;

		that.title = "Home Page";
		that.name = "LoftSchool";
		that.valuables = ['We are the best', 'We are awesome'];
		that.addValubles = function() {

		}
	};

  // @ngInject
	function HomeConfig($stateProvider) {
		console.log( 'Home config!' );
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'app/home/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'hc'
			});
	};
})();
;(function(){
  'use strict';

  angular
    .module('fitness.login', [
      'fitness.dbc'
    ])
    .config(loginConfig)

    //ngIngect
    function loginConfig($stateProvider) {
      $stateProvider
        .state( 'signup', {
          url: '/signup',
          templateUrl: 'app/login/signup.html',
          controller: 'LoginCtrl',
          controllerAs: 'lc'
        })
        .state( 'signin', {
          url: '/signin',
          templateUrl: 'app/login/signin.html',
          controller: 'LoginCtrl',
          controllerAs: 'lc'
        });
      }

})();
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

    auth.$onAuth(function(authDataFire){
      if (authDataFire) {// Logged in
        console.log('$onAuth: Logged in ', authDataFire);
        users.getUser(authDataFire.uid).then(function(_user){
          console.log(_user);
          $rootScope.currentUser = {
            uid: authDataFire.uid,
            loggedIn: true,
            fullname: _user.name + ' ' + _user.surname
          };
          _user.$watch(function(){
            $rootScope.currentUser = {
              uid: authDataFire.uid,
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

    fc.test = function(_user) {
        console.log( _user );
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

;(function(){
  'use strict';

  angular
    .module('fitness.members', [
      'fitness.dbc'
    ])
    .config(memberConfig)

    //ngIngect
    function memberConfig($stateProvider) {
      $stateProvider
        .state( 'members', {
          url: '/members',
          templateUrl: 'app/members/members.html',
          controller: 'MemberCtrl',
          controllerAs: 'mc'
        });
      }

})();
;(function(){
  'use strict';

  angular
    .module('fitness.members')
    .controller('MemberCtrl', MemberController)
  
     function MemberController(members) {
      var sc = this;
      sc.members = [];
      members.getMembers().then(function(_data) {
        sc.members = _data;
        console.log( _data );
      });
    }

})();

;(function(){
  'use strict';

  angular
    .module('fitness.members')
    .factory('members', MemberFactory)
  
  // @ngInject
  function MemberFactory(dbc, $firebaseArray) {
    var fc = {};
    var ref = dbc.getRef();
    var usersRef = ref.child('users');

    var members = null;

    fc.getMembers = function(){
      return $firebaseArray(usersRef).$loaded(function(_d){
        // console.log(_d);
        return _d;
      });
    };
 
    return fc;
  }

})();

;(function() {
  'use strict'
  angular
    .module('fitness.profile', [])
    .controller('ProfileCtrl', ProfileController)
    .config(ProfileConfig)

  // @ngInject
  function ProfileController() {
    console.log( 'Profile Page' );
  }

  // @ngInject
  function ProfileConfig($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileCtrl'
      });
  }

})();
;(function() {
  'use strict';

  angular
    .module('fitness.persons', [])
    .controller('PersonCtrl', PersonController)

  // @ngInject
  function PersonController() {
    var sc = this;
    var person = [];

    angular.forEach(listJson, function(item){
      var date = +new Date(item.registered);
      item.registered = date;
      person.push(item);
    });

    sc.users = person;
  }
})();
;(function(){
  'use strict';

  angular
    .module('fitness.users', [
      'fitness.dbc'
    ])
    .config(userConfig)

    //ngIngect
    function userConfig($stateProvider) {
      $stateProvider
        .state( 'users', {
          url: '/users',
          templateUrl: 'app/users/users.html',
          controller: 'UserCtrl',
          controllerAs: 'uc'
        });
      }

})();
;(function(){
  'use strict';

  angular
    .module('fitness.users')
    .controller('UserCtrl', UserController)
  
    //ngIngect
    function UserController(users) {
      var sc = this;
      sc.users = [];
      users.getUsers().then(function(_data) {
        sc.users = _data;
        console.log( _data );
      });
    }

})();

;(function(){
  'use strict';

  angular
    .module('fitness.users')
    .factory('users', UserFactory)
  
  // @ngInject
  function UserFactory(dbc, $firebaseArray, $firebaseObject) {
    var fc = {};
    var ref = dbc.getRef();
    var usersRef = ref.child('users');

    var users = null;

    fc.getUsers = function() {
      return $firebaseArray(usersRef).$loaded(function(_data){
        // console.log(_data);
        return _data;
      });
    };
    
    fc.getUser = function(_id) {
      return $firebaseObject(usersRef.child(_id)).$loaded();
    }

    fc.createBlankUser = function() {
      return $firebaseArray(usersRef).$add({
        name: '',
        surname: ''
      }).then(function(_ref){
        return $firebaseObject(_ref).$loaded();
      })
    }
    return fc;
  }

})();

;(function() {
  'use strict';

  angular
    .module('fitness.users')
    .filter('since', FromTime);

  // @ngInject
  function FromTime(){
    return function(date){
      var
        msg,
        now = +new Date(),
        diff = (now - date)/1000,
        min = 60,
        hour = 60*min,
        day = 24*hour,
        month = 30*day,
        threeMonths = 90*day,
        sixMonths = 180*day,
        year = 365*day;
      
      if(diff < min)
        msg = "только что";
      else if(diff > min && diff < hour)
        msg = "в течение часа";
      else if(diff > hour && diff < day)
        msg = "более суток назад";
      else if(diff > day && diff < month)
        msg = "больше, чем месяц назад";
      else if(diff > month && diff < threeMonths)
        msg = "более 3 месяцев назад";
      else if(diff > threeMonths && diff < sixMonths)
        msg = "более полугода";
      else
        msg = "больше года назад";

      return msg;
    }
  }

})();
;(function(){
  'use strict';

  angular
    .module('fitness.workouts', [
      'fitness.dbc'
    ])
    .config(workoutConfig)

    //ngIngect
    function workoutConfig($stateProvider) {
      $stateProvider
        .state( 'workouts', {
          url: '/workouts',
          templateUrl: 'app/workouts/workouts.html',
          controller: 'WorkoutCtrl',
          controllerAs: 'wc'
        });
      }

})();
;(function(){
  'use strict';

  angular
    .module('fitness.workouts')
    .controller('WorkoutCtrl', WorkoutController)
  
    //ngIngect
    function WorkoutController(workouts) {
      var sc = this;

      sc.editWorkout = function(_workout) {
        console.log( _workout );
        sc.showForm = true;
        sc.editingWorkout = {
          id: _workout.$id,
          name: _workout.name,
          type: _workout.type
        };
      };

      sc.saveWorkout = function() {
        workouts.saveWorkout(sc.editingWorkout).then(function() {
          sc.cancelWorkout();
        });
      };

      sc.createWorkout = function() {
        workouts.createBlankWorkout().then(function(_data) {
          console.log( _data );
          sc.editWorkout(_data);
        })
      };

      sc.removeWorkout = function() {
        workouts.deleteWorkout(sc.editingWorkout).then(function() {
          sc.cancelWorkout();
        })
      };

      sc.cancelWorkout = function() {
        sc.showForm = false;
        sc.editingWorkout = {
          id: null,
          name: null,
          type: null
        };
      };

      sc.cancelWorkout();
      sc.workouts = [];
      workouts.getWorkouts().then(function(_data) {
        console.log( _data );
        sc.workouts = _data;
      });
    }

})();

;(function(){
  'use strict';

  angular
    .module('fitness.workouts')
    .factory('workouts', WorkoutFactory)
  
  // @ngInject
  function WorkoutFactory($q, dbc, $firebaseArray, $firebaseObject) {
    var fc = {};
    var ref = dbc.getRef();
    var workoutsRef = ref.child('workouts');

    var workouts = null;

    fc.getWorkouts = function() {
      return $firebaseArray(workoutsRef).$loaded(function(_d){
        return _d;
      });
    };

    fc.saveWorkout = function(_workout) {
      var workout = $firebaseObject(workoutsRef.child(_workout.id));
      return workout.$loaded(function(_dbworkout) {
        _dbworkout.name = _workout.name;
        _dbworkout.type = _workout.type;
        return _dbworkout.$save();
      });
    };

    fc.deleteWorkout = function(_workout) {
      return $firebaseObject(workoutsRef.child(_workout.id)).$remove();
    }

    fc.createBlankWorkout = function() {
      return $firebaseArray(workoutsRef).$add({
        id: null,
        name: null,
        type: null
      }).then(function(_ref) {
        return $firebaseObject(_ref).$loaded();
      });
    }
    
    return fc;
  }

})();
