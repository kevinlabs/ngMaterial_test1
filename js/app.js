angular.module('StarterApp', ['ngMaterial', 'ngMdIcons', 'ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'mainCtrl',
                // template: '<h1>testing home</h1>'
                templateUrl: "./../views/quote.html"
            })
            .state('quote', {
                url: '/quote',
                controller: 'quoteCtrl',
                // template: '<h1>quote</h1>'
                templateUrl: "./../views/quote.html"
            })
            .state('biblequote', {
                url: '/biblequote',
                controller: 'bibleQuoteCtrl',
                // template: '<h1>bible quote</h1>'
                templateUrl: "./../views/biblequote.html"
            });

        // $urlRouterProvider
        //     .otherwise('/');
    })

    .config(function ($mdThemingProvider) {
        var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
            'contrastDefaultColor': 'light',
            'contrastDarkColors': ['50'],
            '50': 'ffffff'
        });
        $mdThemingProvider.definePalette('customBlue', customBlueMap);
        $mdThemingProvider.theme('default')
            .primaryPalette('customBlue', {
                'default': '500',
                'hue-1': '50'
            })
            .accentPalette('pink');
        $mdThemingProvider.theme('input', 'default')
            .primaryPalette('grey');
    });