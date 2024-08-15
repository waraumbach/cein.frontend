import { createContext, useState, useContext } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState({});

  const addToOrder = (product, quantity) => {
    setOrderItems(prevItems => ({
      ...prevItems,
      [product._id]: {
        ...product,
        quantity: (prevItems[product._id]?.quantity || 0) + quantity
      }
    }));
  };

  const removeFromOrder = (productId) => {
    setOrderItems(prevItems => {
      const updatedItems = { ...prevItems };
      delete updatedItems[productId];
      return updatedItems;
    });
  };

  const totalPrice = () => {
    return Math.ceil(Object.values(orderItems).reduce((acc, item) => acc + item.price * item.quantity, 0));
  };

  return (
    <OrderContext.Provider value={{ orderItems, addToOrder, removeFromOrder, totalPrice }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  return useContext(OrderContext);
};
