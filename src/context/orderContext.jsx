import React, { createContext, useState, useContext } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState([]);

  const addToOrder = (product, quantity) => {
    setOrderItems([...orderItems, { product, quantity }]);
  };

  const removeFromOrder = (productId) => {
    setOrderItems(orderItems.filter(item => item.product.id !== productId));
  };

  const totalPrice = () => {
    return orderItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
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
