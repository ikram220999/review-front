import React, { useState, useEffect } from "react";

const Filter = () => {
  return (
    <div className="p-2 w-5/6 flex flex-wrap gap-3" >
     
      <select
        id="countries"
        class="text-gray-900 border-none text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 w-60 shadow-md"
      >
        <option selected>Rating</option>
        <option value="US">1 star</option>
        <option value="CA">2 star</option>
        <option value="FR">3 star</option>
        <option value="DE">4 star</option>
      </select>

      <select
        id="countries"
        class="text-gray-900 border-none text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block  p-2.5 w-60 shadow-md"
      >
        <option selected>Date</option>
        <option value="US">Newest</option>
        <option value="CA">Oldest</option>
     
      </select>
      <select
        id="countries"
        class="text-gray-900 border-none text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block  p-2.5 w-60 shadow-md"
      >
        <option selected>Price</option>
        <option value="US"> below 100 </option>
        <option value="CA"> 100 - 500 </option>
        <option value="FR"> 500 - 1000</option>
        <option value="DE"> above 1000 </option>
      </select>
      <select
        id="countries"
        class="text-gray-900 border-none text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block  p-2.5 w-60 shadow-md"
      >
        <option selected>Price</option>
        <option value="US"> below 100 </option>
        <option value="CA"> 100 - 500 </option>
        <option value="FR"> 500 - 1000</option>
        <option value="DE"> above 1000 </option>
      </select>

    </div>
  );
};

export default Filter;
