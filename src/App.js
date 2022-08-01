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
      <Navbar />

      <div className="flex bg-grey-100">
        <Sidebar />
        <div className=" w-full bg-grey-100 p-3">
          <Filter />
          


          <div className="mt-5 mb-5">
            <h2 className="font-normal">Search result for "Zenfone Max Pro"</h2>
            <h2 className="font-semibold">100 result</h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {item ? (
              item.map((it) => {
                return <Item name={it.name} description={it.description} />;
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
  ) ;
           
}

export default App;
