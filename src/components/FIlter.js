import React, { useState, useEffect } from "react";

const Filter = () => {
  return (
    <div className="p-2 flex gap-3 font-semibold" >
     
      <select
        id="countries"
        class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      >
        <option selected>Rating</option>
        <option value="US">1 star</option>
        <option value="CA">2 star</option>
        <option value="FR">3 star</option>
        <option value="DE">4 star</option>
      </select>

      <select
        id="countries"
        class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      >
        <option selected>Date</option>
        <option value="US">Newest</option>
        <option value="CA">Oldest</option>
     
      </select>
      <select
        id="countries"
        class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
