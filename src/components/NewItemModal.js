import { Button, Modal, Label, TextInput, Rating, Toast } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const NewItemModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [starCount, setStarCount] = useState([
    "text-gray-300",
    "text-gray-300",
    "text-gray-300",
    "text-gray-300",
    "text-gray-300",
  ]);
  const [ca, setCa] = useState([]);
  const [category, setCategory] = useState([]);

  const [input, setInput] = useState({
    category: "",
    title: "",
    description: "",
    price: "",
    rating: 0,
  });
  const [inputImg, setInputImg] = useState(null);

  console.log("input", input);
  console.log("inputImg", inputImg);

  const onClick = () => {
    setIsOpen(true);
  };

  const hover = (key) => {
    console.log(key);
    let a = 0;
    if (key < 4) {
      a = 4 - key;
    }

    let newArr = [];
    for (let i = 0; i <= key; i++) {
      newArr.push("text-yellow-400");
    }

    while (a) {
      newArr.push("text-gray-300");
      a--;
    }

    setStarCount(newArr);
    setInput({
      ...input,
      rating: key + 1,
    });
  };

  const leave = () => {
    setStarCount([
      "text-gray-300",
      "text-gray-300",
      "text-gray-300",
      "text-gray-300",
      "text-gray-300",
    ]);
  };

  const selectedStar = (key) => {
    hover(key);
    console.log("kambing");
    console.log("new starCount", starCount);
  };

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleImg = (e) => {
    setInputImg(e.target.files[0]);
  };

  console.log("starrcount", starCount);

  const onClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("toast");
    const formData = new FormData();

    formData.append("title", input.title);
    formData.append("description", input.description);
    formData.append("category", input.category);
    formData.append("price", input.price);
    formData.append("rating", input.rating);
    formData.append("image", inputImg);

    axios
      .post("http://localhost:8000/api/item/store", formData)
      .then(function (response) {
        alert("success");
        setIsOpen(false);
      })
      .catch(function (error) {
        alert("error");
        console.log(error);
      });
  };

  // const showToast = () => {

  //   addToast(content, {
  //     appearance: "success",
  //     autoDismiss: true,
  //   });
  // };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/category")
      .then(function (response) {
        console.log("category", response);
        setCategory(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <React.Fragment>
        <Button
          onClick={onClick}
          color="failure"
          className="bg-red-500 text-red-400"
        >
          + New Review
        </Button>
        <Modal show={isOpen} onClose={onClose}>
          <Modal.Header>New Review</Modal.Header>
          <Modal.Body>
            <form className="flex flex-col gap-4" enctype="multipart/form-data">
              <div>
                <div className="mb-2 block">
                  <Label value="Category" />
                </div>
                <select
                  className="rounded-md border-3 border-gray-300 w-full"
                  value={input.category}
                  onChange={handleInput}
                  name="category"
                >
                  <option>Select category</option>
                  {category
                    ? category.map((cat) => (
                        <option value={cat.id}>{cat.name}</option>
                      ))
                    : ""}
                </select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Title" />
                </div>
                <TextInput
                  type="text"
                  placeholder=""
                  name="title"
                  value={input.title}
                  onChange={handleInput}
                  required={true}
                  shadow={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Description" />
                </div>
                <TextInput
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={handleInput}
                  required={true}
                  shadow={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="price" />
                </div>
                <TextInput
                  type="number"
                  name="price"
                  value={input.price}
                  onChange={handleInput}
                  required={true}
                  shadow={true}
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label value="Rating" />
                </div>

                {starCount.map((st, key) => (
                  <FontAwesomeIcon
                    icon={faStar}
                    className={"text-4xl my-2 mx-3 " + st}
                    onMouseEnter={() => hover(key)}
                    // onMouseLeave={leave}
                    onClick={() => selectedStar(key)}
                  />
                ))}
              </div>

              <div>
                <div className="mb-2 block">
                  <Label value="Image" />
                </div>
                <input
                  type="file"
                  name="img"
                  onChange={handleImg}
                  className="rounded-md shadow-sm border w-full"
                ></input>
              </div>

              <div className="flex items-center gap-2"></div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              color="gray"
              className="hover:text-red-500"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button color="failure" onClick={handleSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    </>
  );
};

export default NewItemModal;
