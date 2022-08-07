import React, { useState, useEffect } from "react";

const Item = (props) => {
  const star = [1, 1, 1, 1, 1];

  let name = props.name;
  let des = props.description;
  let img = props.img;
  console.log("image", img);

  console.log("iteasm", name);

  return (
    <div className="  shadow-md border rounded-md flex w-full hover:bg-gray-100 hover:cursor-pointer p-3">
      {img ? (
        <img src={`http://localhost:8000${img}`} width="200" className="rounded-md "></img>
      ) : (
        ""
      )}

      <div className="mx-3 my-2">
        <div className="mb-6">
          <div className="flex align-bottom">
            <p className="font-bold text-lg text-red-600 mb-3">{name} </p>
            <p className="text-lg align-bottom text-gray-400 ml-2">
              {" "}
              ( 100 reviews ){" "}
            </p>
          </div>
          <p className="font-italic text-md">{des}asdsasd asda sdasdadada s a a sd as da d a da sd a sda d a da s daa sa sd a sd aadada s a a sd as da d a da sd a sda d a da s daa sa sd a sd a sd a sda sdadada s a a sd as da d a da sd a sda d a da s daa sa sd a sd a sd a sda sdadada s a a sd as da d a da sd a sda d a da s daa sa sd a sd a sd a sda sdadada s a a sd as da d a da sd a sda d a da s daa sa sd a sd a sd a sda sdadada s a a sd as da d a da sd a sda d a da s daa sa sd a sd a sd a sda sdadada s a a sd as da d a da sd a sda d a da s daa sa sd a sd a sd a sda sdadada s a a sd as da d a da sd a sda d a da s daa sa sd a sd a sd a sda sdadada s a a sd as da d a da sd a sda d a da s daa sa sd a sd a sd a sda sdadada s a a sd as da d a da sd a sda d a da s daa sa sd a sd a sd a sda sdadada s a a sd as da d a da sd a sda d a da s daa sa sd a sd a sd a sda sdadada s a a sd as da d a da sd a sda d a da s daa sa sd a sd a sd a sda sdadada s a a sd as da d a da sd a sda d a da s daa sa sd a sd a sd a sda sdadada s a a sd as da d a da sd a sda d a da s daa sa sd a sd a sd a sda sd sd a sda sd a sdas da s as a sda sdasdasas das dasd as das dasd</p>
        </div>
        <div className=""></div>
        <div className="flex items-center">
          <ul class="flex">
            {star.map((s) => (
              <li>
                <svg
                  aria-hidden="true"
                  focusable="true"
                  data-prefix="far"
                  data-icon="star"
                  class="w-4 text-yellow-500 mr-1"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                  ></path>
                </svg>
              </li>
            ))}
          </ul>
          4.0 rating
        </div>
        <button className="bg-red-400 text-white font-semibold py-1.5 px-5 rounded-md mt-2 hover:bg-red-500">
          See Review
        </button>
      </div>
    </div>
  );
};

export default Item;
