var btn = document.getElementById('btn')
var person = document.getElementById('person')
var date = document.getElementById('date')
var flavour = document.getElementById('flavour')



btn.addEventListener('click', function () {
  alert(`Hi ${person.value}, you have made an order for the ${date.value} of a ${flavour.value}'s cake`);
});



/*

function myFunction() {
    alert("Thanks for your order, you will receive an email of confirmation.");
  }

var btn = document.getElementById('btn');
btn.addEventListener('click', function(){body.style.background = "lightgrey"});
*/
const clients = { Vito: 'Strawberry', Fatima: 'lemon', Hector: 'Chocolate' };

for (const property in clients) {
  console.log(`Favorite Flavour ${property}: ${clients[property]}`);
}

