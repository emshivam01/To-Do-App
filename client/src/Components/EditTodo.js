import axios from "axios";
import { EditTodoToast } from "../Utils/Toasts/TodoToast";

const editTodo = async (
  e,
  id,
  isOpen,
  newTodo,
  setNewTodo,
  newTitle,
  setNewTitle,
  setResponseBack,
  setIsOpen
) => {
  e.preventDefault();

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
  setIsOpen(isOpen ? false : true);
};

export default editTodo;
