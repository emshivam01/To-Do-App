import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import axios from "axios";
import { useEffect, useState } from "react";

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

const Card = () => {
  const [todos, setTodos] = useState([]);
  const [isDropDown, setDropDown] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/getTodos")
      .then((response) => {
        setTodos(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-[#252525] min-h-40 mx-5 my-8 p-4 rounded-md">
      {console.log(todos, "27 ")}
      <div className="flex justify-between items-center">
        <h2 className="text-white text-xl font-semibold">
          {todos.length > 0 ? todos[0].title : ""}
        </h2>
        <div className="flex items-center gap-2 ">
          <button className="text-white">
            <EditNoteRoundedIcon sx={style} />
          </button>

          <button className="text-white">
            <DeleteForeverIcon sx={style2} />
          </button>

          <button
            onClick={() =>
              isDropDown ? setDropDown(false) : setDropDown(true)
            }
            className="text-white "
          >
            {isDropDown ? (
              <ArrowDropDownIcon sx={style3} />
            ) : (
              <ArrowDropUpIcon sx={style3} />
            )}
          </button>
        </div>
      </div>

      {isDropDown && (
        <div className="text-white text-lg mt-4">
          <ul className="pl-8  list-disc">
            <li>{}</li>
            <li>Second Task</li>
            <li>Third Task</li>
            <li>Fourth Task</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Card;
