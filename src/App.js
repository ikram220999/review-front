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

  const getItem = () => {
    axios
      .get("http://localhost:8000/api/item")
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

  return (
    <div className="App">
      <div className="h-14">
        <Navbar />
      </div>

      <div className="flex bg-grey-100">
        <div className="w-72">
          <Sidebar />
        </div>
        <div className="w-4/5 fixed right-0 top-20">
          <Filter />
        </div>

        <div className="w-4/5 right-0 mt-16 bg-grey-100 p-4 ">
          <div className="mt-5 mb-5">
            <h2 className="font-normal">Search result for "Zenfone Max Pro"</h2>
            <h2 className="font-semibold">100 result</h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {item ? (
              item.map((it) => {
                return <Item name={it.name} description={it.description} img={it.image} />;
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
        </div>
      </div>
    </div>
  );
}

export default App;
