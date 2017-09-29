(function()
{
	angular.module("videoApp").service('cross_controller_dataservice'),cross_controller)
	
	function cross_controller()
	{
		this.get_state=get_state;
		this.get_state_by_observer=get_state_by_observer;
		var observers[];
		var running=false;
		
		function get_state
		{
			return running;
		}
		function get_state_by_observer()
		{
			observers.push(running);
		}
		function start_video()
		{
			console.log("start_video called");
			running=true;
			return running;
		}
		function stop_video()
		{
			console.log("stop_video_called");
			running=false;
			return running;
		}
		
		
	}
	/*
	var cross_controller_dataservice=angular.module('cross_controller_dataservice',[]);

	cross_controller_dataservice.factory('cross_controller',function()
	{	
		factory.start_video=function()
		{
			console.log("start_video called");
			running=true;
			return running;
		}
		factory.stop_video=function()
		{
			console.log("stop_video_called");
			running=false;
			return running;
		}
		factory.get_state=function()
		{
			console.log("running state:"+running);
			if (running==true)
				return true;
			if (running==false)
				return false;
		}
		return factory;
	});*/
}