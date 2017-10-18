var app=angular.module('app',['ngRoute','angularCSS']);

app.config(function($routeProvider)
{
	$routeProvider
	.when('/about',
	{
		templateUrl:'about/about.html',
		controller:'about_controller',
		css:'about/about.css'
	})
	.when('/display',
	{
		templateUrl:'display/display.html',
		controller:'display_controller',
		css:'display/display.css'
	})
	.when('/extras',
	{
		templateUrl:'extras/extras.html',
		controller:'extras_controller',
		css:'extras/extras.css'
	})
	.otherwise({redirectTo:'/about'});
});
app.controller('app_controller',function($scope)
{
	$scope.angular_not_working="";
	$scope.pageContent='';
});