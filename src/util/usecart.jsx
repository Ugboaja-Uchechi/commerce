// useCart.js
import { useContext } from 'react';
import { CartContext } from './cartcontext'; // Adjust the path as necessary

export const useCart = () => {
  return useContext(CartContext);
};
