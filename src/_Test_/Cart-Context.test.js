import { act, renderHook } from "@testing-library/react-hooks";
import { CartProvider, CartContext } from "../Context/cart-context";

test("adds and removes items from the cart", () => {
  const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;

  const { result } = renderHook(() => React.useContext(CartContext), {
    wrapper,
  });

  act(() => {
    result.current.addToCart({ id: 1, name: "Item 1" });
  });

  act(() => {
    result.current.removeFromCart(1);
  });

  expect(result.current.cart.length).toBe(0);
  expect(result.current.cart.find((item) => item.id === 1)).toBeUndefined();
});
