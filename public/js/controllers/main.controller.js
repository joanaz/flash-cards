app.controller('MainController', function($scope, FlashCardsFactory, ScoreFactory) {
  $scope.categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node',
    'Reset'
  ];
  $scope.scores = ScoreFactory;
  //console.log(FlashCardsFactory.getFlashCards())
  FlashCardsFactory.getFlashCards().then(function(data) {
    $scope.flashCards = data;
  })

  $scope.getCategoryCards = function(category) {
    $scope.selectedCategory = category;
    FlashCardsFactory.getFlashCards(category).then(function(data) {
      $scope.flashCards = data;
    })
  }

  $scope.answerQuestion = function(answer, flashCard) {
    if (!flashCard.answered) {
      flashCard.answered = true;
      flashCard.answeredCorrectly = answer.correct;
      if (flashCard.answeredCorrectly) {
        $scope.scores.correct++;
      } else {
        $scope.scores.incorrect++;
      }
    }
  }
});


app.controller("StatsController", function($scope, ScoreFactory) {
  $scope.scores = ScoreFactory;
})