import { createContext, useEffect, useState } from "react";
import Items from "../prices.json";


const ArtContext = createContext(null);

const ArtContextProvider = (props) => {
  const [cartItems, setCartItems] = useState();

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemid in cartItems) {
      if (cartItems[itemid] > 0) {
        let itemInfo = Items.find((item) => item.Id === Number(itemid));
        totalAmount += cartItems[itemid] * itemInfo.price;
      }
    }
    return totalAmount;
};

const addToCart = (productId, quantity) => {
  setCartItems((prev) => ({ ...prev, [productId]: (prev[productId] || 0) + quantity }));
    }

  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const updatedCart = {...prev};
      if (updatedCart[productId] > 0) {
        updatedCart[productId]--;
      };
      return updatedCart
    });
  };

  const updateCartItemCount = (newAmount, productId) => {
    setCartItems((prev) => ({ ...prev, [productId]: newAmount }));
  };

  const checkout = () => {
    setCartItems({});
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ArtContext.Provider value={contextValue}>
      {props.children}
    </ArtContext.Provider>
  );
};

export {ArtContext, ArtContextProvider};
