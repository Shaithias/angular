var app=angular.module('app');
app.service("back_service",function()
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