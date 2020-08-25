var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemDetails={};
  itemDetails["itemName"]=item;
  itemDetails["itemPrice"]=Math.random()*100;
  console.log(itemDetails);
  cart.push(itemDetails);
  return `${item} has been added to your cart.`
}

function viewCart() {
  var cartItems="In your cart, you have "
  var eachItem=[]
  if (cart.length>0){
    for (let i=0; i<cart.length;i++) {
      var 
    }
  } else {
    return "Your shopping cart is empty."
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
