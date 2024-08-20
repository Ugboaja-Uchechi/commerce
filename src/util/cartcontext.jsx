import { createContext, useState } from 'react';

// Create the Cart Context
export const CartContext = createContext();

// Cart Provider to wrap around the components that need access to the cart
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCartOpen = () => {
    setIsCartOpen(prev =>!prev);
    console.log("toggle cart open");
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isCartOpen, toggleCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};

