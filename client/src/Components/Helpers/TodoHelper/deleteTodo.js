import axios from "axios";

import { DeleteTodoToast } from "../../../Utils/Toasts/TodoToast";

const deleteTodo = async (setNewTodo, id) => {
  try {
    const res = await axios.delete(`http://localhost:4000/deleteTodo/${id}`);
    console.log(res.data);
    DeleteTodoToast();
    setNewTodo((newTodo) => newTodo + 1);
  } catch (error) {
    console.log(error.message);
  }
};

export default deleteTodo;
