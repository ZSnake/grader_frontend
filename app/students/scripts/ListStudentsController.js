angular
  .module('students')
  .controller('ListStudentsController', ['$scope', 'supersonic', 'StudentsService', function($scope, supersonic, StudentsService) {
      $scope.students = StudentsService.GetStudents();
      
  }]);
