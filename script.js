function calculateCartTotal(cartItems) {
  return cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

const cart = [
  { name: "Keyboard", price: 1500, quantity: 2 },
  { name: "Mouse", price: 800, quantity: 1 },
];

console.log(calculateCartTotal(cart));
