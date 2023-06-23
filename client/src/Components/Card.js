import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useState } from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const styleModal = {
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

const style = {
  width: "25px",
  height: "25px",
};

const style2 = {
  width: "20px",
  height: "20px",
};

const style3 = {
  width: "30px",
  height: "30px",
};

const Card = ({ title, tasks, id }) => {
  const [isDropDown, setDropDown] = useState(false);

  const [responseBack, setResponseBack] = useState();

  const [task, setTask] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(isOpen ? false : true);
  };

  const createTask = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:4000/createTask/${id}`, {
        taskDesc: task,
      });
      setResponseBack(res.data);
    } catch (error) {
      console.error(error);
      setResponseBack("Error occurred while submitting the title");
    }
    setTask("");
    setIsOpen(false);
  };

  const deleteTodo = async () => {
    try {
      const res = await axios.delete(`http://localhost:4000/deleteTodo/${id}`);
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-[#252525] min-h-40 mx-5 my-8 p-4 rounded-md flex flex-col justify-center">
      <div className="flex justify-between items-center">
        <h2 className="text-white text-xl font-medium">{title}</h2>
        <div className="flex items-center gap-2 ">
          <button className="text-white">
            <EditNoteRoundedIcon sx={style} />
          </button>

          <button onClick={deleteTodo} className="text-white">
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

      {isDropDown && tasks && tasks.length > 0 && (
        <div
          className={`text-white text-lg mt-4 overflow-hidden transition-all duration-300 ${
            isDropDown ? "max-h-[200px]" : "max-h-0"
          }`}
        >
          <ul className="pl-8   list-disc">
            {tasks.map((task) => (
              <div key={task._id} className="flex justify-between">
                <li key={task._id}>
                  {task.description
                    ? task.description
                    : "There's Nothing to do"}
                </li>
                <button className="text-white">
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
          className="w-40 mt-8 text-white bg-blue-600 px-5 py-2 rounded-md m-auto"
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
          <form onSubmit={createTask}>
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
    </div>
  );
};

export default Card;
