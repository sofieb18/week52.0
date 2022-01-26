function apply() {
  let firstName = prompt("What is your first name?");
  alert("Hi " + firstName + ", enjoy your trip to Japan!");
}

let applyButton = document.querySelector("button");

applyButton.addEventListener("click", apply);
