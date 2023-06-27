import React, { useState } from "react";
import axios from "axios";

const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const [responseBack, setResponseBack] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://todo-app-server-lime.vercel.app/createTodo",
        {
          title,
        }
      );
      setResponseBack(res.data);
    } catch (error) {
      console.error(error);
      setResponseBack("Error occurred while submitting the title");
    }

    // Clear the input field after submission
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
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

      {responseBack && <p>{responseBack}</p>}
    </form>
  );
};

export default AddTodoForm;
