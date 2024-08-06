import React from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";

function CartItems() {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Tittle</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className="cartitem-quantity">{cartItems[e.id]}</button>
                <p>{e.new_price * cartItem[e.id]}</p>
                <img src={remove_icon} alt="" onClick={removeFromCart(e.id)} />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default CartItems;
