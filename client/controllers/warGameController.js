app.controller('warGameController', ['$scope', '$location', 'usersFactory', 'warGameFactory', 'socketsFactory', function($scope, $location, usersFactory, warGameFactory, socketsFactory) {

  $scope.user = usersFactory.getCurrentUser();
  $scope.gameState;

  var getGames = function(){
    socketsFactory.showGames('war', function(returned_data){
        $scope.games = returned_data;
        console.log('games:', $scope.games);
    });
  };

  getGames();

  // Create Game
  $scope.handleCreateGame = function() {
      const gameObj = {'gameName': 'war', 'userName':  $scope.user.user_name};
      socketsFactory.createGame(gameObj, function(returned_data){
        $scope.gameState = returned_data;
        getGames();
      });
  };

  // Join Game
  $scope.handleJoinGame = function(){

  };


}]);
