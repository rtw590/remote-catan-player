//  Vue instance

new Vue ({
    el: '#vue-app',
    //  Vue Data
    data: {
        wood: 0,
        brick: 0,
        sheep: 0,
        wheat: 0,
        ore: 0,
        roads: 2,
        settlements: 2,
        cities: 0,
        roadsRemaining: 10,
        settlementsRemaining: 6,
        citiesRemaining: 4,
        victoryPoints: 2,
        longestRoad: false,
        largestArmy: false,
        longestRoadColor: "error"
    },
    //  Vue Methods: Can hold functions
    methods: {
        addWood: function(inc) {
            this.wood += inc;
        },
        subtractWood: function(dec) {
            this.wood -= dec;
        },
        addBrick: function(inc) {
            this.brick += inc;
        },
        subtractBrick: function(dec) {
            this.brick -= dec;
        },
        addSheep: function(inc) {
            this.sheep += inc;
        },
        subtractSheep: function(dec) {
            this.sheep -= dec;
        },
        addWheat: function(inc) {
            this.wheat += inc;
        },
        subtractWheat: function(dec) {
            this.wheat -= dec;
        },
        addOre: function(inc) {
            this.ore += inc;
        },
        subtractOre: function(dec) {
            this.ore -= dec;
        },
        buildRoad: function(inc) {
            this.roads += inc;
            this.roadsRemaining -= inc;
        },
        buildSettlement: function(inc) {
            this.settlements += inc;
            this.settlementsRemaining -= inc;
            this.victoryPoints += inc;
        },
        buildCity: function(inc) {
            this.cities += inc;
            this.citiesRemaining -= inc;
            this.settlementsRemaining += inc;
            this.settlements -= inc;
            this.victoryPoints += inc;
        },
        longestRoadVP: function() {
            if (this.longestRoad) {
                this.victoryPoints += 2
            } else {
                this.victoryPoints -= 2
            }
        },
        largestArmyVP: function() {
            if (this.largestArmy) {
                this.victoryPoints += 2
            } else {
                this.victoryPoints -= 2
            }
        }
    },
    // Different than methods. Lookup documentation to understand better
    computed: {
        
    }
});
