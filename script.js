angular.module('myApp', [])
		.controller('myController', function($scope) {
		var placeholders = ["*female name*", "*job title*", "*tedious task*", "*dirty task*", "*celebrity*", "*useless skill*", "*adjective*", "*obnoxious celebrity*", "*huge number*", "*male name*" ];
		var words = [];
		var gender;
		var showMadLib = false;
		
		$scope.placeholders = placeholders;
		$scope.words = words;
		$scope.gender = gender;

		$scope.submit = function(){
			showMadLib = $scope.madlibEntry.$valid;
			$scope.showMadLib = showMadLib;
		}

		$scope.reset = function(){
			showMadLib = false;
			words = [];
			$scope.showMadLib = showMadLib;
			$scope.madlibEntry.$setPristine();
			$scope.words = words;
		}
	});