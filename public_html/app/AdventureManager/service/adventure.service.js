angular.module('tableTopTools')
        .factory('Adventure', ['$resource',
            function ($resource) {
                return $resource('http://localhost:3000/adventure/:adventureId', {}, {
                    update: {method: "POST"}
                });
            }
        ]);