var app = angular.module('flashCards', []);

app.filter('cheat', function() {
  return function(anwsers) {
    return anwsers.filter(function(anwser) {
      return anwser.correct
    })
  }
})