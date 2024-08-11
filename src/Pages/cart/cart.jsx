import React from "react";
import ItemList from "../art/art";
import "../../styles.css";

const Cart = () => {

const CartList = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const response = await fetch("https://localhost:3000/cart");
      if (response.ok) {
        const data = await response.json();
        setCart(data);
      } else {
        console.error("Failed to fetch cart");
      }
    };
    fetchCart();
  }, [cart]);
};

let deleteCart = async (id) => {
  await fetch(`https://localhost:3000/cart/${id}`, {
    method: "DELETE",
  });
  console.log(cart.id);

  setCart(cart.filter((cart) => cart.id !== id));

return (
  <div className="main-rectangle-div">
    ;
    <div className="background">
      <h2>Your Cart</h2>
      <div>
        {cart.map((Item) => (
          <div>
            {" "}
            <p key={Item.id}>
              {Item.Image} {Item.Name} ${Item.Price}
            </p>
            <button onClick={() => deleteCart(Item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <Link to="/checkout">Check Out</Link>
    </div>
  </div>
);
};
};

export default Cart;
