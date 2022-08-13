import axios from "axios";
import React, { useState, useEffect } from "react";

const Sidebar = ( { value } ) => {
  const cate = ["Mobile Phone", "Laptop & Pc", "Furniture", "Food and Drink"];
  const [category, setCategory] = useState([]);

  const getCategory = () => {
    axios
      .get("http://localhost:8000/api/category")
      .then(function (response) {
        console.log(response);

        setCategory(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="flex h-screen bg-red-100  hidden xl:inline-flex">
      <div className="flex w-72 flex-col border-r-2 border-gray-200 bg-gray-100 p-2 ">
        <input
          className="w-full mt-2 py-2 px-3 border-2 rounded-md"
          placeholder="Type and press Enter"
        ></input>

        <div className="font-bold mt-7 mb-3">Category</div>
        {category.map((cate, index) => (
          <a
            href="#"
            className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-200 hover:text-red-600"
            onClick={() => value(index+1)}
          >
            <span className="text-2xl">
              <i className="bx bx-home"></i>
            </span>
            <span>{cate.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
