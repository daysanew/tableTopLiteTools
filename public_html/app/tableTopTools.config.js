angular.module('tableTopTools').config(function ($routeProvider) {
    $routeProvider
            .when("/", {
                templateUrl: "main.html"
            })
            .when("/editAdventure/:adventureId?", {
                templateUrl: "editAdventure.html"
            })
            .when("/story", {
                templateUrl: "main.html"
            })
            .when("/loadCharacter", {
                templateUrl: "loadCharacter.html"
            });
});
