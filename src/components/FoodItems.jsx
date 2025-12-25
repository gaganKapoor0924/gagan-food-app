import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const handleToast = (name) => toast.success(`${name} added to cart`);

  const selected = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="mx-6 my-6 flex flex-wrap gap-4 justify-center lg:justify-start">
        {/* <FoodCard /> */}
        {FoodData.filter((item) => {
          if (selected === "All") {
            return item.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              selected === item.category &&
              item.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => {
          return (
            <FoodCard
              key={food.id}
              id={food.id}
              img={food.img}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              handleToast={handleToast}
            />
          );
        })}
      </div>
    </>
  );
};

export default FoodItems;
