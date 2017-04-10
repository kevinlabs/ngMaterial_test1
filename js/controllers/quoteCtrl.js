angular.module('StarterApp').controller('quoteCtrl', function ($scope, $stateParams, mainSrv) {

    $scope.quoteArray = [];
    $scope.quote = '';

    $scope.getQuote = function () {
        mainSrv.randomQuote().then(function (response) {
            $scope.quote = response.data;
            console.log('Showing the quotes: ', $scope.quote);
            console.log($scope.quote.text, $scope.quote.author.name);
            $scope.quoteArray.push({
                quote: $scope.quote.text,
                author: $scope.quote.author.name
            });

            console.log('Showing array: ', $scope.quoteArray);
        });
    };

    $scope.getQuote();


    console.log('Out side of function Showing array: ', $scope.quoteArray);


});