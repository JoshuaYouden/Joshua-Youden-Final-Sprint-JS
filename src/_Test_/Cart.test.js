import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CartProvider } from "../Context/cart-context";
import Cart from "../Pages/cart/cart";

test("renders cart items and displays the correct total price", () => {
  const initialCart = [
    {
      Id: "1",
      Name: "Violet Night",
      Price: "620",
      Image: "../../public/Images/Art1.jpx",
    },
    {
      Id: "2",
      Name: "Nightly Sunset",
      Price: "500",
      Image: "../../public/Images/Art2.jpg",
    },
  ];

  render(
    <MemoryRouter>
      <CartProvider value={{ cart: initialCart }}>
        <Cart />
      </CartProvider>
    </MemoryRouter>
  );

  const cartItems = screen.queryAllByRole("img");
  expect(result.current.cart.length).toBe(0);
  expect(result.current.cart.find((item) => item.id === 1)).toBeUndefined();

  const totalPrice = screen.getByText("Total: $1120.00");
  expect(totalPrice).toBeInTheDocument();
});
