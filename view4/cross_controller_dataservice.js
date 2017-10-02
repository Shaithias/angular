angular.module("videoApp").factory('cross_controller',function()
{
	var factory={};
	var running=false;
	
	factory.start_video=function()
	{
		console.log('cross_controller.start_video called');
		running=true;
	}
	
	factory.stop_video=function()
	{
		console.log('cross_controller.stop_video called');
		running=false;
	}
	
	factory.get_state=function()
	{
		console.log('cross_controller.get_state called');
		return running;
	}
	
	return factory;
});
