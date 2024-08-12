// This code imports what's needed for the fuctions to work
import { createContext, useEffect, useState } from "react";
import ItemsData from "../prices.json";

const ArtContext = createContext(null);

const ArtContextProvider = (props) => {
  const [cartItems, setCartItems] = useState();

  // This calculates the total price
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemid in cartItems) {
      if (cartItems[itemid] > 0) {
        let itemInfo = ItemsData.find((item) => item.Id === Number(itemid));
        totalAmount += cartItems[itemid] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  // This adds the items from the json
  const addToCart = (productId, quantity) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + quantity,
    }));
  };
  // This removes the items
  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[productId] > 0) {
        updatedCart[productId]--;
      }
      return updatedCart;
    });
  };

  // This code updates the price whenever another item is added to the cart
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

export { ArtContext, ArtContextProvider }; //this code allows it to be used in other components
