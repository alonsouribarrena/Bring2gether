function myFunction() {
    alert("Thanks for your order, you will receive an email of confirmation.");
  }

var btn = document.getElementById('submit');
btn.addEventListener('click', function(){body.style.background = "lightgrey"});

const clients = { Vito: 'Strawberry', Fatima: 'lemon', Hector: 'Chocolate' };

for (const property in clients) {
  console.log(`Favorite Flavour ${property}: ${clients[property]}`);
}