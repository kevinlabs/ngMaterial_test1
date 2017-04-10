angular.module('StarterApp').controller('quoteCtrl', function ($scope, $stateParams, mainSrv) {

    $scope.quoteArray = [];
    $scope.quote = '';

    $scope.getQuote = function () {
        mainSrv.randomQuote().then(function (response) {
            $scope.quote = response.data;
            console.log('Showing the quotes: ', $scope.quote);
            // console.log($scope.quote.text, $scope.quote.author.name);
            $scope.quoteArray.push({
                quote: $scope.quote.quoteText,
                author: $scope.quote.quoteAuthor
            });

            console.log('Showing array: ', $scope.quoteArray);
        });
    };


    function closure(num) {
        return function () {
            $scope.getQuote();
        }
    }

    function timeOutCounter() {
        for (var i = 0; i <= 10; i++) {
            setTimeout(closure(i), i * 2000);
        }
    }

    timeOutCounter();

});