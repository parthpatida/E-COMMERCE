import "./cart-dropdown.styles.jsx";
import Button from "../button/button.component";
import { CartContext } from "../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Checkout from "../routes/checkout/checkout.component";
import { CartDropdownContainer,EmptyMessage,CartItems } from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/Checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your car is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
