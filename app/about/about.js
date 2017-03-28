angular.module('hellosolarsystem').component('about', {
  templateUrl:  'about/about.html',

  controller: function($scope, $state, $stateParams) {
  		var receivedName = $stateParams.value1;
  		// alert(receivedName);
  		console.log(receivedName);
  		console.log($stateParams);
  		$scope.value1 = $stateParams.value1;
  		$scope.value2 = $stateParams.value2;

  		console.log($stateParams.value1);
  		console.log($stateParams.value2);
  }
})