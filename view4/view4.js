var app=angular.module("videoApp",["cross_controller_dataservice"]);
app.controller('main_controller',function($scope,cross_controller)
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
		console.log("yes clicked");
		cross_controller.start_video();
		
	}
	$scope.no=function()
	{

		wipeContent(["question","yes_btn","no_btn"]);
		console.log("no clicked");
		cross_controller.stop_video();
	}	
});
app.controller('video_controller',function($scope,cross_controller)
{
	
	console.log(cross_controller.get_state_by_observer());
	running=cross_controller.get_state_by_observer();
	
	console.log(cross_controller.get_state);

	if(running())
	{
		init_video();
	}
	function init_video()
	{
		var video=document.getElementById('video');
		var video=document.querySelector('video');
		
		var constraints=window.constraints =
		{
			audio:false,
			video:true
		};
		navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError)
		
		function handleSuccess(stream)
		{
			var video=stream.getVideoTracks();
			console.log('constraints:',constraints);
			stream.oninactive=function()
			{
				console.log('inactive stream');
			};
			window.stream=stream;
			video.srcObject=stream;
		}
		function handleError(error)
		{
			console.log('error in handle error:', error);
		}
		
		if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
		{
			navigator.mediaDevices.getUserMedia({video:true}).then(function(stream)
			{
				if (window.URL)
				{
					video.src=window.URL.createObjectURL(stream)||(stream);
					video.play();
				}
				else
				{
					video.src=stream||stream;
					video.play();
				}
			});
		}
		else if(navigator.getUserMedia) 
		{ // Standard
			navigator.getUserMedia({ video: true }, function(stream) 
			{
				video.src = stream;
				video.play();
			}, errBack);
		} 
		else if(navigator.webkitGetUserMedia) 
		{ // WebKit-prefixed
			navigator.webkitGetUserMedia({ video: true }, function(stream)
			{
				video.src = window.webkitURL.createObjectURL(stream);
				video.play();
			}, errBack);
		} 
		else if(navigator.mozGetUserMedia) 
		{ // Mozilla-prefixed
			navigator.mozGetUserMedia({ video: true }, function(stream)
			{
				video.src = window.URL.createObjectURL(stream);
				video.play();
			}, errBack);
		}
	}
});
app.controller('button_controller',function($scope,cross_controller)
{
	
});