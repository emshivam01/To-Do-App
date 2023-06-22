import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useState } from "react";
import axios from "axios";

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

  const deleteTodo = async () => {
    try {
      const res = await axios.delete(`http://localhost:4000/deleteTodo/${id}`);
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-[#252525] min-h-40 mx-5 my-8 p-4 rounded-md">
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
          <ul className="pl-8  list-disc">
            {tasks.map((task) => (
              <li key={task._id}>
                {task.description ? task.description : "There's Nothing to do"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Card;
