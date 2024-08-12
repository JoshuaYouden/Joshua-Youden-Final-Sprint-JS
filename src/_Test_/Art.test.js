import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CartProvider } from "../Context/cart-context";
import Shop from "../Pages/art/art";
import Cart from "../Pages/cart/cart";

test("renders shop items and adds an item to the cart", () => {
  render(
    <MemoryRouter>
      <CartProvider>
        <Shop />
        <Cart />
      </CartProvider>
    </MemoryRouter>
  );

  const addButton = screen.getAllByText("Add to Cart")[0];
  fireEvent.click(addButton);

  const checkoutButton = screen.queryByText("Proceed to Checkout");
  expect(checkoutButton).toBeInTheDocument();
});
