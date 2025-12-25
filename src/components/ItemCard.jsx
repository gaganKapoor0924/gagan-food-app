import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  decreaseQty,
  incrementQty,
  removeFromCart,
} from "../redux/slices/CartSlice";

const ItemCard = ({ id, name, price, qty, img, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2">
      <MdDelete
        className="absolute right-7 text-gray-600 cursor-pointer"
        onClick={() => {
          dispatch(removeFromCart({ id }));
          handleToast(name);
        }}
      />
      <img src={img} alt="" className="w-[50px] h-[50px]" />
      <div>
        <h2 className="font-bold text-gray-800">{name}</h2>

        <div className="flex justify-between">
          <span className="text-green-500 font-bold">₹ {price}</span>
          <div className="flex gap-4 absolute right-7">
            <AiOutlineMinus
              onClick={() =>
                qty > 1 ? dispatch(decreaseQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 rounded-md hover:text-white hover:bg-green-500 hover:border-none p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() => dispatch(incrementQty({ id }))}
              className="border-2 border-gray-600 text-gray-600 rounded-md hover:text-white hover:bg-green-500 hover:border-none p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
