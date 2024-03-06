import React from "react";
import DeliveryForm from "../../components/DeliveryForm/DeliveryForm";
import Cart from "../../components/Cart/Cart";
import createOrder from "../../api/createOrder";
import { useState } from "react";
import { useEffect } from "react";
import { StyledContaiter } from "./ShoppingCart.styled";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState(() => {
    const storedDrugs = JSON.parse(localStorage.getItem("medicineCart")) || [];
    return storedDrugs;
  });

  useEffect(() => {
    localStorage.setItem("medicineCart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleQuantityChange = (newQuantity, id) => {
    setCartItems((prevState) => {
      const newCartItems = [...prevState];
      const drugToUpdate = newCartItems.findIndex((item) => item._id === id);
      if (drugToUpdate !== -1)
        newCartItems[drugToUpdate].quantity += newQuantity;
      return newCartItems;
    });
  };

  const calculateTotalPrice = () => {
    let sum = 0;
    cartItems.forEach((item) => (sum += item.quantity * item.price));
    return sum;
  };

  const deleteFromCart = (id) => {
    setCartItems((prevState) => {
      const newCartItems = [...prevState];
      const drugToDelete = newCartItems.findIndex((item) => item._id === id);
      if (drugToDelete !== -1) newCartItems.splice(drugToDelete, 1);
      return newCartItems;
    });
  };

  const createOrderObject = (formElements) => {
    const { name, email, phone, address } = formElements;
    const totalPrice = calculateTotalPrice();
    const products = cartItems.map((item) => {
      return {
        productId: item._id,
        quantity: item.quantity,
      };
    });

    const newOrder = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
      price: totalPrice,
      products,
    };
    return newOrder;
  };

  const sendOrderToServer = async (newOrder) => {
    try {
      const createdOrder = await createOrder(newOrder);
      console.log(createdOrder);
      setCartItems([]);
    } catch (e) {
      console.log("Error while creating an order", e);
    }
  };

  const handleAddOrder = async (e) => {
    e.preventDefault();
    const newOrder = createOrderObject(e.target.elements);
    await sendOrderToServer(newOrder);
    e.target.reset();
  };

  return (
    <>
      <StyledContaiter>
        <DeliveryForm
          onSubmit={handleAddOrder}
          calculateTotalPrice={calculateTotalPrice}
        />
        <Cart
          cartItems={cartItems}
          deleteFromCart={deleteFromCart}
          handleQuantityChange={handleQuantityChange}
        />
      </StyledContaiter>
    </>
  );
};

export default ShoppingCart;
