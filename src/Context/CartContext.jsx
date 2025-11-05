import React, { createContext, useContext, useReducer } from "react";

export const CheckoutContext = createContext();

const initalSate = [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const exists = state.find((item) => item.id === action.payload.id);
      if (exists) return state;
      return [...state, { ...action.payload, quantity: 1 }]; // already existing product + new product

    case "REMOVE":
      return state.filter((item) => item.id !== action.payload);

    case "INCREASE":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREASE":
      return state.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initalSate);

  return (
    <CheckoutContext.Provider value={{ cart, dispatch }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCart = () => useContext(CheckoutContext);
