import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { setCategory } from "../redux/slices/CategorySlice";
import { useDispatch, useSelector } from "react-redux";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();
  const selected = useSelector((state) => state.category.category);

  const listUniqueCategories = () => {
    const unique = [...new Set(FoodData.map((food) => food.category))];
    setCategories(unique);
    console.log(unique);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  return (
    <div className="mx-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="flex gap-3 my-5 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
            selected === "All" ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>

        {categories.map((cat) => {
          return (
            <button
              onClick={() => dispatch(setCategory(cat))}
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
                selected === cat ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
