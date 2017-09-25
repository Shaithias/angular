var app=angular.module("todoApp",[]);

app.controller('todoControl', function($scope)
{
	$scope.tasks=[];
	$scope.add=function()
	{
		if($scope.title=='')
		{
			alert("you can't add an empty item to your todolist!");
		}
		if($scope.title!='')
		{
			$scope.tasks.push($scope.title);
			$scope.title="";
		}
	}
	$scope.remove=function()
	{
		$scope.tasks.pop();
	}
	$scope.sort=function()
	{
		$scope.tasks.sort();
	}
	init=function()
	{
		$scope.title='';
	}
	angular.element(document).ready(init);
});