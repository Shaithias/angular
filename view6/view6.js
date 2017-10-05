var app=angular.module("app");
app.controller("first_controller",function($scope,back_service)
{
	$scope.names=[];
	var tyler=new back_service.Person("tyler","dylans","16");
	var jim=new back_service.Person("jim","gumbo","15");
	var bob=new back_service.Person("bob","jambo","18");
	var zach=new back_service.Person("zach","bell","17");
	$scope.names.push(tyler.getName());
	$scope.names.push(jim.getName());
	$scope.names.push(bob.getName());
	$scope.names.push(zach.getName());
});
app.controller("second_controller",function($scope,Person)
{
	$scope.names2=[];
	Person.setPerson("tyler","durden","16");
	$scope.names2.push(Person.getName());
});