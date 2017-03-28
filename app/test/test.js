angular.module('hellosolarsystem').component('test',{
  	templateUrl: 'test/test.html',

  	controller: function($scope, $state, $stateParams) {
  		var receivedName = $stateParams.value1;
  		console.log(receivedName);
  		console.log($stateParams);
  	}
})