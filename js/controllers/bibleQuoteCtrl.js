angular.module('StarterApp').controller('bibleQuoteCtrl', function ($scope, $stateParams, mainSrv) {

    $scope.quoteArray = [];
    $scope.quote = '';

    $scope.getBible = function () {
        mainSrv.randomBible().then(function (response) {
            $scope.quote = response.data;
            console.log('Showing the quotes: ', $scope.quote);
            console.log($scope.quote['0'].bookname);
            $scope.quoteArray.push({
                bookname: $scope.quote['0'].bookname,
                chapter: $scope.quote['0'].chapter,
                verse: $scope.quote['0'].verse,
                text: $scope.quote['0'].text
            });

            console.log('Showing array: ', $scope.quoteArray);
        });
    };

    function closure(num) {
        return function () {
            $scope.getBible();
        }
    }

    function timeOutCounter() {
        for (var i = 0; i <= 10; i++) {
            setTimeout(closure(i), i * 1800);
        }
    }

    timeOutCounter();
});

