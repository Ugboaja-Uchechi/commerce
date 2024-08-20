import { useCart } from "../util/usecart";

const Cart = () => {
  const { cartItems, toggleCartOpen, isCartOpen } = useCart();

  // Calculate the total price
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`cart-container ${isCartOpen ? 'open' : ''}`}>
      <div className="product-info">
        <div>
          <p>Your cart</p>
        </div>
        <div onClick={toggleCartOpen}>
          Close
        </div>
      </div>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))
        )}
      </div>
      <div className="cart-total">
        <p>Total Amount: ${totalAmount}</p>
      </div>
    </div>
  );
};

export default Cart;
