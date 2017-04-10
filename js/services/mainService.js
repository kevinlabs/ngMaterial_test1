angular.module('StarterApp').service('mainSrv', function ($http, $log) {


    this.randomQuote = function () {
        var baseUrl = 'http://www.quotzzy.co/api/quote?lang=en';
        var baseUrl2 = 'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?%22/';
        var baseUrl3 = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=20';
        //posts?filter[orderby]=rand&filter[posts_per_page]=1
        return $http.get(baseUrl3).then(function(response) {
            console.log('Quote is back!', response);
            return (response);
        });
    };

    // function randomQuote() {
    //     $.ajax({
    //         url: "http://api.forismatic.com/api/1.0/?",
    //         dataType: "jsonp",
    //         data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
    //         success: function (response) {
    //             $("#random_quote").html("<p id='random_quote' class='lead text-center'>" +
    //                 response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");
    //             $("#tweet").attr("href", "http://twitter.com/home/?status=" + response.quoteText +
    //                 ' (' + response.quoteAuthor + ')');
    //         }
    //     });
    // }


    //http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?%22/

});