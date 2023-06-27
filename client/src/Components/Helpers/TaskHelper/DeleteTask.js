import axios from "axios";
import { DeleteTaskToast } from "../../../Utils/Toasts/TaskToast";

const deleteTask = async (taskId, newTodo, setNewTodo, id) => {
  try {
    const res = await axios.delete(
      `https://todo-app-server-lime.vercel.app/deleteTask/${id}/${taskId}`
    );
    console.log(res.data, taskId, id);
    DeleteTaskToast();
    setNewTodo((newTodo) => newTodo + 1);
  } catch (error) {}
};

export default deleteTask;
