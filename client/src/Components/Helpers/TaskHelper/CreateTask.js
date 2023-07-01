import axios from "axios";
import { AddTaskToast, EmptyTaskToast } from "../../../Utils/Toasts/TaskToast";

const createTask = async (task, setTask, id, fetchTodos, setIsOpen, isOpen) => {
  if (!task) {
    EmptyTaskToast();
    return;
  }

  try {
    const res = await axios.post(
      `https://todo-app-server-lime.vercel.app/createTask/${id}`,
      {
        taskDesc: task,
      }
    );
    AddTaskToast();
    fetchTodos();
    console.log(res.data);
  } catch (error) {}

  setTask("");
  setIsOpen(!isOpen);
};

export default createTask;
