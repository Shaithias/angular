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
	this.Person=Person;
});

app.factory('Person',function()
{
	var Person={};
	
	var firstName;
	var lastName;
	var age;
	
	
	Person.getName=function()
	{
		return firstName+lastName;
	}
	Person.getAge=function()
	{
		return age;
	}
	Person.setPerson=function(a,b,c)
	{
		firstName=a;
		lastName=b;
		age=c;
	}
	return Person;
});