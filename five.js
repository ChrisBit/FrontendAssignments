var fotballClubs = ['Barcelona','Juventus','Liverpool FC','Bayern München'];

document.getElementById("Switch").addEventListener( 
    'click',function(){ 
    	fotballClubs.splice(0,fotballClubs.length); // splice modifies the array. here it removes all the indexes
fotballClubs.push('Ford','Volvo','Audi','Nissan');
console.log(fotballClubs);
    }
);
