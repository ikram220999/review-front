import { Button, Modal, Label, TextInput, Rating } from "flowbite-react";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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

  console.log("starrcount", starCount);

  const onClose = () => {
    setIsOpen(false);
  };
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
            <form className="flex flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="text" value="Title" />
                </div>
                <TextInput
                  id="email2"
                  type="text"
                  placeholder=""
                  required={true}
                  shadow={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="text" value="Description" />
                </div>
                <TextInput
                  id="password2"
                  type="text"
                  required={true}
                  shadow={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="number" value="price" />
                </div>
                <TextInput
                  id="repeat-password"
                  type="number"
                  required={true}
                  shadow={true}
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="number" value="Rating" />
                </div>
                <Rating size="lg">
                  {starCount.map((st, key) => (
                    <FontAwesomeIcon
                      icon={faStar}
                      className={"text-4xl my-2 mx-3 " + st}
                      onMouseEnter={() => hover(key)}
                      onMouseLeave={leave}
                    />
                  ))}
                </Rating>
              </div>

              <div className="flex items-center gap-2"></div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button color="failure" onClick={onClick}>
              I accept
            </Button>
            <Button color="gray" onClick={onClose}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    </>
  );
};

export default NewItemModal;
