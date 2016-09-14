angular.module('calculate', []);

angular.module('calculate')
.factory('deezDays', function() {
	var days = 365;
	var totalDays = {};
	totalDays.calculateDays = function(years) {
		return years * days;
	};
	return totalDays;
});

angular.module('calculate')
.controller('mainControl', function(deezDays) {
	var self = this;
	self.years = 1;
	self.totalDays = function() {
		return deezDays.calculateDays(self.years);
	};
});




/*
angular.module('calculate')
.controller('mainControl', function($scope) {
	$scope.years = 1;
	$scope.days = 365;
	$scope.totalDays = function() {
		return ($scope.years * $scope.days) + ' days';
	};
});
*/