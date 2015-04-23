var app = angular.module('directiveWorkshop', ['myDirective', 'notify']);

app.controller('mainCtrl', function($scope, mainService){
$scope.getData = function () {
        return mainService.getData($scope.query).then(function (data) {
           console.log(data);
           return $scope.data = data;
        });
    };

});