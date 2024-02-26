// DIRECTIVES - From Jeetan Madaan

app.directive("projectCard", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/project-card.html',
        replace: true,
        scope:{
            title:"@",
            text:"@",
            linkurl: "@"
        }
    }
});
app.directive("customFooter", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/custom-footer.html',
        replace: true,
        scope:{
            authorname:"@",
            linkurl:"@"
        }
    }
});