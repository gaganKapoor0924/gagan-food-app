import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, img, name, price, desc, rating, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[280px] bg-white p-5 flex flex-col gap-2 rounded-lg">
      <img
        src={img}
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500">₹ {price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}... </p>
      <div className="flex justify-between">
        <span className="flex items-center gap-2">
          <FaStar className="text-yellow-500" /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(addToCart({ id, name, img, price, rating, qty: 1 }));
            handleToast(name);
          }}
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
