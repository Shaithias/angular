var app=angular.module("Main",[]);

app.controller('first_controller', function($scope)
{
	$scope.greeting="Simple calculator logic, using angularJS controllers to perform logic";
});

app.controller('calculator', function($scope)
{
	$scope.result=function()
	{
		return eval($scope.a + $scope.symbol + $scope.b);
		/*
		if($scope.symbol=='+')
		{return $scope.a + $scope.b}
		if($scope.symbol=='-')
		{return $scope.a - $scope.b}
		if($scope.symbol=='*')
		{return $scope.a * $scope.b}
		if($scope.symbol=='/')
		{return $scope.a / $scope.b}
		*/
	}
});