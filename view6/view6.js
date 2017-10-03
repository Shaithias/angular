var app=angular.module("app",[]);
app.service('back_service',function($http,$q)
{
	var Person=function(first_name,last_name,age)
	{
		this.first_name=first_name;
		this.last_name=last_name;
		this.age=age;
	}
	Person.prototype.getName=function()
	{
		return (this.first_name+' '+this.last_name);
	}
	Person.prototype.getAge=function()
	{
		return this.age;
	}
});
app.controller("main_controller",function($scope,back_service)
{
	names=["test","test2"];
	var tyler=new Person("tyler","dylans","16");
	var jim=new Person("jim","gumbo","15");
	var bob=new Person("bob","jambo","18");
	var zach=new Person("zach","bell","17");
	
	console.log(tyler.getName);
	
	names.push(tyler.getName());
	names.push(jim.getName());
	names.push(bob.getName());
	names.push(zach.getName());
});