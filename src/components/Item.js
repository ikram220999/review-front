import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
const Item = (props) => {
  const star = [1, 1, 1, 1, 1];
  const [vote, setVote] = useState();
  const [upclass, setUpClass] = useState("text-gray-300 hover:text-gray-400");
  const [ucbool, setucBool] = useState(false);
  const [downclass, setDownClass] = useState(
    "text-gray-300 hover:text-gray-400"
  );
  const [dcbool, setdcBool] = useState(false);

  let name = props.name;
  let des = props.description;
  let img = props.img;
  console.log("image", img);

  console.log("iteasm", name);

  const voteUp = () => {
    if (!dcbool) {
      if (ucbool) {
        setUpClass("text-gray-300 hover:text-gray-400");
        setucBool(false);
        setVote(vote - 1);
      } else {
        setUpClass("text-yellow-400");
        setucBool(true);
        setVote(vote + 1);
      }
    }
  };

  const voteDown = () => {
    if (!ucbool) {
      if (dcbool) {
        setDownClass("text-gray-300 hover:text-gray-400");
        setdcBool(false);
        setVote(vote + 1);
      } else {
        setDownClass("text-yellow-400");
        setdcBool(true);
        setVote(vote - 1);
      }
    }
  };

  useEffect(() => {
    setVote(props.vote);
  }, [props.vote]);

  return (
    <div className="  shadow-md border rounded-md flex w-full hover:bg-gray-50 hover:cursor-pointer p-3">
      <div className="w-1/6">
        {img.length > 9 ? (
          <img
            src={`http://localhost:8000${img}`}
            width=""
            className="rounded-md "
          ></img>
        ) : (
          <div
            className=" border border-gray-200 rounded-md 
          flex flex-col items-center justify-center h-4/5 text-gray-400"
          >
            <FontAwesomeIcon
              icon={faImage}
              className="text-gray-300 text-3xl"
            ></FontAwesomeIcon>
            <p>No image</p>
          </div>
        )}
      </div>

      <div className="w-4/6 mx-3 my-2">
        <div className="mb-6">
          <div className="flex align-bottom">
            <p className="font-bold text-lg text-red-600 mb-3">{name} </p>
            <p className="text-lg align-bottom text-gray-400 ml-2">
              {" "}
              ( 100 comment ){" "}
            </p>
          </div>
          <p className="font-italic text-md">{des}</p>
        </div>
        <div className="">
          <p className="text-xl font-semibold mb-3">RM {props.price}</p>
        </div>
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
      <div className="w-1/6 h-full flex flex-col justify-center items-center">
        <FontAwesomeIcon
          icon={faSortUp}
          className={`text-7xl m-0 p-0 ` + upclass}
          onClick={voteUp}
        ></FontAwesomeIcon>
        <p className="text-3xl text-gray-600 select-none">{vote}</p>
        <FontAwesomeIcon
          icon={faSortDown}
          className={`text-7xl m-0 p-0 ` + downclass}
          onClick={voteDown}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Item;
