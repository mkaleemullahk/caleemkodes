(function () {
	'use strict';

	angular.module('LunchCheck',[]).controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject =['$scope'];

	function LunchCheckController ($scope){
		$scope.items = '';
		$scope.message = '';
		$scope.fontStyle = {};
		$scope.boxStyle = {};

		$scope.Check = function () {
				if($scope.items !== '') {
				var arr = $scope.items.split(',');
				var count =0;
				for(var i =0; i<arr.length; i++){
					if(arr[i].trim() !=='')
						count++;
				}
				if(count > 0){
					if(count <=3){
						$scope.message = 'Enjoy!';
            $scope.fontStyle = {
  						"color":"green"
  					};
					}
					else if(count > 3){
						$scope.message = 'Too much!';
            $scope.fontStyle = {
  						"color":"red"
  					};
					}
					$scope.boxStyle = {
						"border-color":"green"
					};
				}
				else {
					enterItems();
				}
			   }
			      else {
				          enterItems();
			             }
		               }
		                var enterItems = function() {
			              $scope.message = 'Please enter data first';
				            $scope.fontStyle =
                    {
                    "color":"red"
				            };
				            $scope.boxStyle =
                    {
					          "border-color":"red"
				            };
		};
	}
})();
