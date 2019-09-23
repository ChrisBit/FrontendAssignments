function FotballClub(theName) {
  this.name = theName;
  this.players = [];
}

var bestClub = new FotballClub('Liverpool FC');
bestClub.players.push('Mohamed Salah', 'Roberto Firmino', 'Sadio Mané',
    'Philippe Coutinho');

FotballClub.prototype.scoreGoal = function() {
  var player = this.players[Math.floor(Math.random() * this.players.length)];
  return player + ' scores a goal!';
};

console.log(bestClub.scoreGoal());