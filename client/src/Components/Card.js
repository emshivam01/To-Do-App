import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { style, style2, style3 } from "./Helpers/MaterialUI Style/style";
import { EditTodoToast, EmptyTodoToast } from "../Utils/Toasts/TodoToast";

import deleteTodo from "./Helpers/TodoHelper/deleteTodo";
import deleteTask from "./Helpers/TaskHelper/DeleteTask";

import createTask from "./Helpers/TaskHelper/CreateTask";

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 320,
  bgcolor: "#252525",
  border: "2px solid #000",
  borderRadius: "6px",
  boxShadow: 24,
  color: "#fff",
  p: 4,
};

const Card = ({ title, tasks, id, fetchTodos, newTodo, setNewTodo }) => {
  const cardRef = useRef();
  const [isDropDown, setDropDown] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [responseBack, setResponseBack] = useState();

  const [task, setTask] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [editModalOpem, setEditModalOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleEditModal = () => {
    setEditModalOpen(editModalOpem ? false : true);
  };

  const editTodo = async (e) => {
    e.preventDefault();

    if (!newTitle) {
      // If newTitle is empty or falsy, exit the function
      EmptyTodoToast();
      return;
    }

    try {
      const res = await axios.put(
        `https://todo-app-server-lime.vercel.app/editTodo/${id}`,
        {
          title: newTitle,
        }
      );
      setResponseBack(res.data);
      setNewTodo((newTodo) => newTodo + 1);
      EditTodoToast();
    } catch (error) {
      setResponseBack("Error occurred while submitting the title");
    }

    // Clear the input field after submission
    setNewTitle("");
    setEditModalOpen(editModalOpem ? false : true);
  };

  const handleCreateTask = (e) => {
    e.preventDefault();
    createTask(task,setTask, id, fetchTodos, setIsOpen, isOpen);
  };

  useEffect(() => {
    const handle = (e) => {
      if (!cardRef.current.contains(e.target)) {
        setDropDown(false);
      }
    };

    document.addEventListener("mousedown", handle);

    return () => {
      document.removeEventListener("mousedown", handle);
    };
  });

  return (
    <div
      ref={cardRef}
      className="bg-[#252525] h-fit w-full lg:w-96  mx-5 my-3 p-4 md:p-6 rounded-md flex flex-col  "
    >
      <div className="flex justify-between items-center gap-2">
        <h2 className="text-white text-xl md:text-2xl font-medium truncate">
          {title}
        </h2>
        <div className="flex items-center gap-2 ">
          <button
            title="Edit Todo"
            className="text-white"
            onClick={handleEditModal}
          >
            <EditNoteRoundedIcon sx={style} />
          </button>

          <button
            title="Delete"
            onClick={() => deleteTodo(setNewTodo, id)}
            className="text-white"
          >
            <DeleteForeverIcon sx={style2} />
          </button>

          <button
            onClick={() =>
              isDropDown ? setDropDown(false) : setDropDown(true)
            }
            className="text-white "
          >
            {isDropDown ? (
              <ArrowDropUpIcon sx={style3} />
            ) : (
              <ArrowDropDownIcon sx={style3} />
            )}
          </button>
        </div>
      </div>

      <hr
        className={`${
          isDropDown ? "block" : "hidden"
        } w-full h-[2px] mx-auto mt-6 bg-gray-100 border-0 rounded dark:bg-gray-700`}
      />

      {isDropDown && tasks && tasks.length > 0 && (
        <div
          className={`text-white text-lg mt-2 overflow-hidden transition-all duration-300 ${
            isDropDown ? "max-h-[200px]" : "max-h-0"
          }`}
        >
          <ul className="pl-8   list-disc">
            {tasks.map((task) => (
              <div key={task._id} className="flex mt-2 justify-between">
                <li key={task._id} id={task._id}>
                  {task.description
                    ? task.description
                    : "There's Nothing to do"}
                </li>
                <button
                  onClick={() => deleteTask(task._id, newTodo, setNewTodo, id)}
                  className="text-white"
                >
                  <DeleteForeverIcon sx={style2} />
                </button>
              </div>
            ))}
          </ul>
        </div>
      )}

      {isDropDown && (
        <button
          onClick={handleToggle}
          className="w-24 mt-8 text-lg  text-white bg-blue-600 px-2 py-1 rounded-md m-auto"
        >
          Add Task
        </button>
      )}

      <Modal
        className=""
        open={isOpen}
        onClose={handleToggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="" sx={styleModal}>
          <form onSubmit={handleCreateTask}>
            <input
              className="w-full border-[1px] rounded-md bg-[#252525] text-xl text-white placeholder:text-xl p-5 focus:outline-none"
              type="text"
              placeholder="Enter task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
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

      <Modal
        className=""
        open={editModalOpem}
        onClose={handleEditModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="" sx={styleModal}>
          <form onSubmit={editTodo}>
            <input
              className="w-full border-[1px] rounded-md bg-[#252525] text-xl text-white placeholder:text-xl p-5 focus:outline-none"
              type="text"
              placeholder="Enter Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
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
  );
};

export default Card;
