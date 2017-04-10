angular.module('StarterApp', ['ngMaterial', 'ngMdIcons', 'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'quoteCtrl',
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

        $urlRouterProvider
            .otherwise('/');
    })

    .config(function ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from our assets domain.  Notice the difference between * and **.
            'http://labs.bible.org/api/**'
        ]);
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