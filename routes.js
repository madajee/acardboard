// ROUTES
app.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'acardboardController'
    })
    .when('/feature/:featureid', {
        templateUrl: function (param) {
            return 'pages/features/feature_' + param.featureid + '.html'
        },
        controller: 'acardboardController'
    })
    .
    otherwise('/');
    
});