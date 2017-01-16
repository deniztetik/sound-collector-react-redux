'use strict';

app.component('search', {
  template:
      '<input class="searchBar" type="text" placeholder="enter query here" ng-model="query"></input>' +
      '<button class="searchButton" ng-click="performQuery()">Search</button>',
  controller: function($scope, $rootScope) {
    $scope.performQuery = function() {
      $rootScope.$emit('searchEvent', {
        query: $scope.query
      });
    };
  }
});
