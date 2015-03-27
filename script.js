angular.module('myApp', [ 'ngAnimate'])
		.controller('myController', function($scope) {
		var placeholders = ["*female name*", "*job title*", "*tedious task*", "*dirty task*", "*celebrity*", "*useless skill*", "*adjective*", "*obnoxious celebrity*", "*huge number*", "*male name*" ];
		var words = [];
		var gender;
		$scope.showMadLib = false;
		
		$scope.placeholders = placeholders;
		$scope.words = words;
		$scope.gender = gender;

		$scope.submit = function(){
			$scope.showMadLib = $scope.madlibEntry.$valid;
		}

		$scope.reset = function(){
			$scope.showMadLib = false;
			words = [];
			
			setTimeout(function() {
				$scope.words = words;
				$scope.madlibEntry.$setPristine();
			}, 500);
			
			
		}

		
	});