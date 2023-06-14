import axios from "axios";
import { useState } from "react";

export const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [res, setRes] = useState("");

  const setTodoTitle = (event) => {
    setTitle(event.target.value);
  };

  const submitTodo = async () => {
    const response = await axios
      .post("/createTodo", { title: title })
      .then((res) => {
        setRes(res);
      })
      .catch((error) => {
        console.log(error);
      });

    const { data } = response;
  };

  return (
    <div className="m-4 shadow-xl text-white ">
      <form onSubmit={submitTodo}>
        <input
          name="title"
          value={title}
          onChange={setTodoTitle}
          type={"text"}
          className="w-full h-12 rounded-lg p-5 text-black placeholder:text-black placeholder:text-xl placeholder:font-normal outline-none"
          placeholder="Enter Your Todo..."
        ></input>
        <input
          type={"submit"}
          className="bg-[#7f5af0] w-full rounded-lg h-10 cursor-pointer mt-4"
        />
      </form>

      <p className="text-white text-2xl">{res}</p>
    </div>
  );
};
