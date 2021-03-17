(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
    	//create variables needed for the exercise
        $scope.lunchItems = '';
        $scope.message = '';
        $scope.checked = false;

        $scope.checkLunch = function() {
        	//if there are no items in the textbox do this
            if ($scope.lunchItems.trim().length === 0) {
                $scope.empty = true;
            } else {
            	//if the textbox is not empty and btn is checked do this
                $scope.checked = true;
                $scope.empty = false;
                //use split method to split the items in by (,) from your textIput
                var arraylunchItems = $scope.lunchItems.split(',');
                //use filter function to format the data that will be displayed to the user
                var itemsArray = arraylunchItems.filter(function(i) {
                //trim each item entered to be indipendent for us to calculate the length
                    return i.trim() !== '';
                });
                //create an if statement for your message display
                if (itemsArray.length <= 3) {
                	//not empty and less than 3 items display ENJOY
                    $scope.message = 'Enjoy!';
                } else {
               	//not empty and greater than 3 items display TOO MUCH
                    $scope.message = 'Too much!';
                }
            }
        };
    }
})();
