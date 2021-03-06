var app=angular.module("carousel_app",[]);

app.controller('carousel_controller',function($scope,$http)
{
	var urls=
	[
	'view1/view1.html',
	'view2/view2.html',
	'view3/view3.html',
	'view4/view4.html',
	'view5/view5.html',
	'view6/view6.html',
	'https://www.guru99.com/angularjs-tutorial.html',
	'https://developer.telerik.com/topics/web-development/creating-angular-2-injectable-service/',
	'https://justintimecoder.com/first-steps-with-ng-4-material-flex-layout-and-cli-1-3-build-optimiser/'


	];
	
	var id='1';
	var index=0;
	
	var iframe= document.createElement('iframe');
	iframe.setAttribute('id',id);
	iframe.setAttribute('src',urls[index]);
	iframe.setAttribute('width',"100%");
	iframe.setAttribute('height',"90%");

	document.body.insertBefore(iframe,document.body.children[0]);

	$scope.left=function()
	{
		if(index<=0)
		{
			console.log(index);
			index=urls.length-1;
			iframe.setAttribute('src',urls[index]);
		}
		else
		{
			console.log(index);
			index--;
			iframe.setAttribute('src',urls[index]);
		}
	}
	$scope.right=function()
	{
		if(index>=urls.length-1)
		{
			console.log(index);
			index=0;
			iframe.setAttribute('src',urls[index]);
		}
		else
		{
			console.log(index);
			index++;
			iframe.setAttribute('src',urls[index]);
		}
	}
});