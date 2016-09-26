angular.module('tableTopTools').component('adventureManager', {
    templateUrl: './app/AdventureManager/templates/editAdventure.html',
    controller: [
        function AdventureManagerController() {
            var self = this;
            
            self.adventure = {name: '', description: '', ruleSet: ''};
            self.ruleSets = [{value: 1, name: "D20 Fantasy"}];
        }
    ]
}
);
     