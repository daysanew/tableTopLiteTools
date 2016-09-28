angular.module('tableTopTools').component('adventureManager', {
    templateUrl: './app/AdventureManager/templates/editAdventure.html',
    controller: ['$routeParams', 'Adventure',
        function AdventureManagerController($routeParams, Adventure) {
            var self = this;
            self.adventure = {adventureId: '', name: '', description: '', ruleSet: ''};
            self.adventure.adventureId = $routeParams.adventureId;
            self.ruleSets = [{value: 1, name: "D20 Fantasy"}];
            
            self.upsertAdventure = function(){
                var adventureResult = Adventure.update(self.adventure);
                adventureResult.$promise.then(function(result){
                   self.adventure.adventureId = result.id; 
                });
                
            };
        }
    ]
}
);
     