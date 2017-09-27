var app=angular.module("videoApp",[]);
app.controller('video_controller',function($scope)
{
	$scope.question="enable video?";
	
	function wipeContent(id)
	{
		for(var i=0;i<id.length;i++)
		{
			var b=document.getElementById(id[i])
			b.parentNode.removeChild(b);
		}
	}
	$scope.yes=function()
	{
		wipeContent(["question","yes_btn","no_btn"]);
	}
	$scope.no=function()
	{
		wipeContent(["question","yes_btn","no_btn"]);
	}
	
});
app.controller('button_controller',function($scope)
{
	
});