function FotballClub(theName) {
    this.name = theName;
    this.players = [];  
}

var bestClub = new FotballClub('Liverpool FC'); // bestClub is an object that inherits from FotballClub
bestClub.players.push('Mohamed Salah', 'Roberto Firmino', 'Sadio Mané', 'Philippe Coutinho');

FotballClub.prototype.scoreGoal = function() { // adds a method to FotballClub
        var player = this.players[Math.floor(Math.random() * this.players.length)];
        return player + ' scores a goal!';
}

console.log(bestClub.scoreGoal()); // bestClub uses a method of FotballClub