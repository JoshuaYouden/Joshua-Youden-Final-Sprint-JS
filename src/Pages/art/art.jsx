import React, { useEffect, useState } from "react";
import CartStuff from "../../Context/art-context";
import Link from "react-router-dom";
import Navbar from "../../Components/navbar";
import "../../styles.css";

const Shop = () => {

const ItemList = () => {
  const [item, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("https://localhost:3000/items");
      if (response.ok) {
        const data = await response.json();
        setItems(data);
      } else {
        console.error("Failed to fetch art");
      }
    };
    fetchItems();
  }, []);

return (
  <div>
    {Items.map((Item) => (
      <div key={Item.id}>
        <div key={Item.Image}>
          <h3>{Item.Name}</h3>
          <p>${Item.Price}</p>
          <AddToCart Item={Item} />
        </div>
      </div>
    ))}{" "}
    const art (
    <div className="main-rectangle-div">
      ;
      <div className="background">
        ;
        <div className="shop-text">
          You want to buy some of my art? You've come to the right place, see
          what I sell!
        </div>
      </div>
    </div>
    );
  </div>
);
};
}

export default Shop