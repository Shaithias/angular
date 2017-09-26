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
			console.log($scope.tasks);
		}
	}
	$scope.sort=function()
	{
		$scope.tasks.sort();
	}
	$scope.remove=function(event)
	{	
		var index=event.target.parentNode.id;
		if(index>-1)
		{
			$scope.tasks.splice(index,1);
		}
	}
	init=function()
	{
		$scope.title='';
	}
	angular.element(document).ready(init);
});