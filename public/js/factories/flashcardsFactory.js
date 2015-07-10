// var app = angular.module('flashCards', []);

app.factory('FlashCardsFactory', function($http) {
    return {
        getFlashCards: function(category) {

            var paramsQuery = {};
            if (category && category !== "Reset")
                paramsQuery = {
                    category: category
                };
            return $http.get('/cards', {
                params: paramsQuery
            }).then(function(response) {
                return response.data;
            })
        }
    };
});

app.factory('ScoreFactory', function() {
    return {
        correct: 0,
        incorrect: 0
    }
})