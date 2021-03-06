module.exports = function() {
  return {
    restrict: 'E',
    scope: {
      games: '='
    },
    template: require('../views/gamesTable.html'),
    controller: function($scope, GameAccessCheck) {
      $scope.canJoin = function(game) {
        return GameAccessCheck.isWaitingForPlayer(game);
      };
    }
  };
};
