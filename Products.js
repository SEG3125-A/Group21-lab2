var currentBasket = JSON.parse(localStorage.getItem("basket")) || [];
function addToBasket(item) {
  var price = parseFloat(item.getAttribute("price"));
  var name = item.innerText.split(" - ")[1];
  currentBasket.push({ name: name, price: price });
}

function submitBasket() {
  currentBasket.sort((a, b) => a.price - b.price);
  localStorage.setItem("basket", JSON.stringify(currentBasket));
}

function goToCartPage() {
  window.location.href = "Cart.html";
}

function goToCustomerPage() {
  window.location.href = "Customer.html";
}
