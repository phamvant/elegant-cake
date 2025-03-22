import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (cake) => {
    setCart((prevCart) => {
      const existingCake = prevCart.find(
        (item) => item.id === cake.id && item.selectedSize === cake.selectedSize
      );
      if (existingCake) {
        return prevCart.map((item) =>
          item.id === cake.id && item.selectedSize === cake.selectedSize
            ? {
                ...existingCake,
                quantity: existingCake.quantity + cake.quantity,
              }
            : item
        );
      }
      return [...prevCart, { ...cake }];
    });
  };

  const removeFromCart = (id, selectedSize) => {
    console.log(selectedSize);
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.id === id && item.selectedSize === selectedSize)
      )
    );
  };

  const updateQuantity = (id, selectedSize, quantity) => {
    if (quantity === 0) {
      removeFromCart(id, selectedSize);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
