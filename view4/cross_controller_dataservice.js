var cross_controller_dataservice=angular.module('cross_controller_dataservice',[]);

cross_controller_dataservice.factory('cross_controller',function()
{
	var running=false;
	function start_video()
	{
		running=true;
	}
	function stop_video()
	{
		running=false;
	}
	return running;
});
