fetch("https://jsonplaceholder.typicode.com/todos")
  .then((result) => result.json())
  .then((res) => {
    createCards(res);
  })
  .catch((err) => console.log(err));

function createCards(result) {
  var cards = "";

  // construct the cards html
  for (let o of result) {
    cards += '<div class="card ' + o.completed + '">';
    cards += '<div class="card-body">';
    cards += "<span>User: " + o.userId + "</span>";
    cards += "<span>Task #" + o.id + "</span>";
    cards += "<h3>" + o.title + "</h3>";
    if (o.completed === true) {
      cards += "<p>Done</p>";
    } else {
      cards += "<p>Not Done</p>";
    }
    cards += "</div>";
    cards += "</div>";
  }

  // manipulate the DOM, output our html
  document.getElementById("cards-goes-here").innerHTML = cards;
}
