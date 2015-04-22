var app = angular.module('myDirective', []);

app.directive('pending', function() {
    return{ 
      restrict: 'AE',
      scope: {
      	request:'&'
      }, 
      link: function(scope, elem, attr) {
      	var loading = angular.element('<img src= "http://assets.motherjones.com/interactives/projects/features/koch-network/shell19/img/loading.gif"/>')
      	loading.hide();
      	elem.after(loading);
      	elem.on('click', function() {
      		console.log(elem);
      		elem.hide();
      		loading.show();
      	scope.request().then(function() {
               elem.show();
               loading.hide();     	   	
           })
      		
      	})
           
      }
    }  


    app.directive('notify', function() {
    	return {
    		restrict: 'AE',
    		scope: {
    			request: '&',
    			title: '=',
    			body: '=',
    			icon: '=',
    		},
    		link: function(scope, elem, attr) {
    	     var Notification = window.Notification || window.mozNotification || window.webkitNotification;
             Notification.requestPermission(function (permission) {
                console.log(permission);
             });

    		}



    	}











    })




});