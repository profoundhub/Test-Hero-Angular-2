'use strict';

angular.module('angular2App')
    .factory('gjson', function($http) {
        return {
            getJoke: function(callback) {
                $http.get('http://api.icndb.com/jokes/random/').success(callback);
            }
        };
    })
    .controller('ChuckCtrl', ['$scope', 'gjson', function ($scope, gjson) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        gjson.getJoke(function(result) {
            console.log('got some joke');
            $scope.text = result.value.joke;
        }); 

        $scope.newJoke = function(){
            gjson.getJoke(function(result) {
                console.log('got some joke');
                $scope.text = result.value.joke;
            }); 
        };
    }]);

