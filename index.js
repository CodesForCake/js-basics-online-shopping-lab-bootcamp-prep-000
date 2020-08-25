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
  var cartItems="In your cart, you have ";
  var eachItem=[];
  if (cart.length>0){
    for (let i=0; i<cart.length;i++) {
      eachItem=`${cart[i].itemName} at ${cart[i].itemPrice}`
    }
    cartItems += eachItem.join(", ");
    console.log(cartItems);
    return cartItems;
  } else {
    return "Your shopping cart is empty."
  }
}

function total() {
  var totalbill = 0;
  for (let i=0; i<cart.length; i++) {
    totalbill+=cart[i].itemPrice;
  }
  return totalbill;
}

function removeFromCart(item) {
  for (let i=0; i<cart.length;i++) {
    if (cart[i].itemName===item) {
      cart.splice(i,1)
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
