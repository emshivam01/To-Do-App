import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import { AddTodoToast } from "../Utils/TodoToast.js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#252525",
  border: "2px solid #000",
  borderRadius: "6px",
  boxShadow: 24,
  color: "#fff",
  p: 4,
};

const AddTodo = ({ newTodo, setNewTodo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [responseBack, setResponseBack] = useState(null);
  const [title, setTitle] = useState("");

  const handleToggle = () => {
    setIsOpen(isOpen ? false : true);
  };

  const createTodo = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4000/createTodo", {
        title,
      });
      setResponseBack(res.data);
      AddTodoToast();
      setNewTodo((newTodo) => newTodo + 1);
    } catch (error) {
      setResponseBack("Error occurred while submitting the title");
    }

    // Clear the input field after submission
    setTitle("");
    setIsOpen(isOpen ? false : true);
  };

  return (
    <div className="">
      <button
        onClick={handleToggle}
        className="flex justify-center items-center fixed bottom-10 right-5 md:bottom-14 md:right-14 lg:bottom-20 lg:right-14 h-14 w-14 lg:h-16 lg:w-16  bg-blue-500 text-white rounded-full p-5 shadow-lg hover:bg-blue-600"
      >
        <AddIcon fontSize="large" />
      </button>
      <div className="">
        <Modal
          className=""
          open={isOpen}
          onClose={handleToggle}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="" sx={style}>
            <form onSubmit={createTodo}>
              <input
                className="w-full border-[1px] rounded-md bg-[#252525] text-xl text-white placeholder:text-xl p-5 focus:outline-none"
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <button
                className="w-full mt-8 text-white bg-blue-600 px-5 py-2 rounded-md m-auto"
                type="submit"
              >
                Submit
              </button>
            </form>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default AddTodo;
