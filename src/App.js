import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Item from "./components/Item";
import Filter from "./components/FIlter";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  const [item, setItem] = useState([]);
  const [filter, setFilter] = useState({
    category: 0,
    rating: "",
    date: "",
    price: "",
  });

  console.log("filter", filter);

  const getItem = () => {
    axios
      .get("http://localhost:8000/api/item", { params: { filter } })
      .then(function (response) {
        console.log(response.data);

        setItem(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getItem();
  }, []);

  useEffect(() => {
    getItem();
  }, [filter]);

  const getItemByCategory = (value) => {
    // axios.get('http://localhost:8000/api/item', value )
    // .then(function (response) {
    //   console.log("child to parent", response);

    // })
    // .catch(function (error) {

    //   console.log(error);
    // });
    console.log("child to parent", value);
    setFilter({
      ...filter,
      category: value,
    });
  };

  const getReq = () => {};

  return (
    <div className="App">
      <div className="h-14">
        <Navbar />
      </div>

      <div className="flex bg-grey-100">
        <div className="md:visible lg:visible invisible">
          <Sidebar value={getItemByCategory} />
        </div>
        <div className="w-4/5 flex justify-center fixed right-0 top-20 lg:w-full xl:w-4/5">
          <Filter />
        </div>

        <div className="mt-16 bg-grey-100 p-4 ">
          <div className="mt-5 mb-5">
            <h2 className="font-normal">Search result for "Zenfone Max Pro"</h2>
            <h2 className="font-semibold">100 result</h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {item ? (
              item.map((it) => {
                return (
                  <Item
                    name={it.name}
                    description={it.description}
                    img={it.image}
                    vote={it.vote}
                    price={it.price}
                    rating={it.rating}
                    id={it.id}
                  />
                );
              })
            ) : (
              <div class="flex justify-center items-center">
                <div
                  class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0"
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-center mt-6">
            <nav aria-label="Page navigation example">
              <ul class="inline-flex items-center -space-x-px">
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span class="sr-only">Previous</span>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    class="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    4
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    5
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span class="sr-only">Next</span>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
