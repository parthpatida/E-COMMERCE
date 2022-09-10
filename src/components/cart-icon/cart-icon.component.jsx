import "./cart-icon.styles.jsx";
//import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../contexts/cart.context";
import { useContext } from "react";

import { ShoppingIcon,CartIconContainer,ItemCount } from "./cart-icon.styles.jsx";



const CartIcon = () => {

  

  const {isCartOpen,setIsCartOpen,cartCount}=useContext(CartContext);
  const toogleIsCartOpen=()=>setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toogleIsCartOpen}>
      <ShoppingIcon  />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
