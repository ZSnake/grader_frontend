angular
  .module('home')
  .controller('LoginController', ['$scope', 'supersonic', 'AuthService', function($scope, supersonic, AuthService) {
      $scope.user = [];
      
      $scope.login = function(user){
        AuthService.Login(user).then(function(response){
          localStorage.setItem('currentUser', response.data);
          $scope.user = {};
          var view = new supersonic.ui.View("students#listStudents");
          supersonic.ui.layers.push(view);
        }).catch(function(err){
          supersonic.ui.dialog.alert("Error", {message: 'Error login in: ' + err.data.message, buttonLabel: "Close"}).then(function() {
            supersonic.logger.log("Alert closed.");
          });
        });
      }
      
      $scope.register = function(){
        var user = {username: $scope.user.username, password:  $scope.user.password, scope: ['admin']};
        AuthService.Register(user).then(function(response){
          alert('Registered in correctly!');
          $scope.login({username: user.username, password: user.password});
        }).catch(function(err){
          supersonic.ui.dialog.alert("Error", {message: 'Error registering: ' + err.data.message, buttonLabel: "Close"}).then(function() {
            supersonic.logger.log("Alert closed.");
          });
        });
      };
      
      $scope.logout = function(){
        authService.Logout().then(function(response){
          alert('logged out correctly');
          localStorage.setItem('currentUser', {});
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      };
  }]);
