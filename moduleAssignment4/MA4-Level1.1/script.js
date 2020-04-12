document.getElementById("theBtn").addEventListener("click", function (e) {
  alert("You successfully clicked the button!");
  e.stopPropagation();
});
