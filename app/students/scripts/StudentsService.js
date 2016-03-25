angular.module('students').factory('StudentsService', ['$http',
	function($http){
		var baseUrl = 'https://angular-scaffold-backend.herokuapp.com/';
		return {
		    GetStudents: function(){
                return [{account: '10911203', name: 'viktor zavala'}, {account: '10911246', name: 'sharon montenegro'}, {account: '11111111', name: 'frank romaña'}]
            }
	    };
}]);