import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(true);
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cart);
  // setActiveCart(cartItems);

  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);

  const totalPrice = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0
  );

  const handleToast = (name) => toast.success(`${name} removed from the cart`);

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white  p-5 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 ease-in-out z-50`}
      >
        <div className="flex justify-between mb-4">
          <span className="text-xl font-bold text-gray-800">My Orders</span>
          <IoMdClose
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-read-300 hover:border-red-300 cursor-pointer"
            onClick={() => setActiveCart(!activeCart)}
          />
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((cart) => {
            return (
              <ItemCard
                key={cart.id}
                id={cart.id}
                name={cart.name}
                img={cart.img}
                price={cart.price}
                qty={cart.qty}
                handleToast={handleToast}
              />
            );
          })
        ) : (
          <h2>Your Cart is empty</h2>
        )}
        {/* <ItemCard /> */}
        <div className="absolute bottom-10">
          <h3 className="font-semibold text-gray-500">Items: {totalQty}</h3>
          <h3 className="font-semibold text-gray-500">
            Total Amount:₹ {totalPrice}
          </h3>
          <hr className="w-full mb-2" />
          <button
            onClick={() =>
              cartItems.length > 0 ? navigate("/success") : navigate("/")
            }
            className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw]  lg:w-[18vw]"
          >
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-10 right-4 ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        }}`}
      />
    </>
  );
};

export default Cart;
