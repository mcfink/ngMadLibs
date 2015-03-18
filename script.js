angular.module('myApp', [])
		.controller('myController', function($scope) {
		var words = ["*female name*", "*job title*", "*tedious task*", "*dirty task*", "*celebrity*", "*useless skill*", "*adjective*", "*obnoxious celebrity*", "*huge number*" ];
		$scope.words = words;
	});