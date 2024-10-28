import {
  StyledCartContainer,
  StyledLi,
  StyledH,
  StyledP,
  StyledButton,
  StyledBlock,
  StyledInput,
  StyledInfo,
} from "./Cart.styled";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";

const Cart = ({ cartItems, deleteFromCart, handleQuantityChange }) => {
  return (
    <StyledCartContainer>
      {cartItems.length !== 0 ? (
        cartItems.map((item) => (
          <StyledLi key={item._id}>
            <div>
              <img src={item.photo} alt={item.name} width="200" height="200" />
            </div>
            <div>
              <StyledH>{item.name}</StyledH>
              <StyledP>Price: {item.price} &#8372;</StyledP>
              <StyledBlock>
                <label htmlFor="quantity">Quantity: </label>
                <StyledInput
                  type="number"
                  name="quantity"
                  defaultValue={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(e.target.value, item._id)
                  }
                />
              </StyledBlock>
              <StyledButton
                type="button"
                onClick={() => deleteFromCart(item._id)}
              >
                <IconContext.Provider value={{ size: "20px" }}>
                  <AiOutlineClose />
                </IconContext.Provider>
              </StyledButton>
            </div>
          </StyledLi>
        ))
      ) : (
        <StyledInfo>Cart is empty :(</StyledInfo>
      )}
    </StyledCartContainer>
  );
};

export default Cart;
