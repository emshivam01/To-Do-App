import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import AddIcon from "@mui/icons-material/Add";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 420,
  bgcolor: "#252525",
  border: "2px solid #000",
  borderRadius: "6px",
  boxShadow: 24,
  color: "#fff",
  p: 4,
};

const AddTodo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");

  const handleToggle = () => {
    setIsOpen(isOpen ? false : true);
  };

  return (
    <div className="">
      <button
        onClick={handleToggle}
        className="flex justify-center items-center fixed bottom-10 right-5 h-14 w-14 text-5xl bg-blue-500 text-white rounded-full p-5 shadow-lg hover:bg-blue-600"
      >
        <AddIcon fontSize="large" />
      </button>
      <div>
        <Modal
          open={isOpen}
          onClose={handleToggle}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="" sx={style}>
            <input
              className="w-full border-[1px] rounded-md bg-[#252525] text-xl text-white placeholder:text-xl p-5 focus:outline-none"
              type="text"
              placeholder="Title"
              onChange={(e) => setTodoTitle(e.target.value)}
            />

            <button className="w-full mt-8 bg-blue-600 px-5 py-2 rounded-md m-auto">
              Add Todo
            </button>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default AddTodo;
