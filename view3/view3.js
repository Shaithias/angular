var app=angular.module("carousel_app",[]);

app.controller('carousel_controller',function($scope,$http)
{
	var urls=
	[
	'https://www.guru99.com/angularjs-tutorial.html',
	'https://www.angularminds.com/blog/article/comparison-difference-between-angular1-vs-angular2-vs-angular4.html',
	'https://justintimecoder.com/first-steps-with-ng-4-material-flex-layout-and-cli-1-3-build-optimiser/',
	'../view2/view2.html',
	'../view1/view1.html'
	];
	
	var id='1';
	var index=1;
	
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