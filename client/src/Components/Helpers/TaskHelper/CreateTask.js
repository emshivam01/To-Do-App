import axios from "axios";

import { AddTaskToast, EmptyTaskToast } from "../../../Utils/Toasts/TaskToast";

const createTask = async (
  fetchTodos,
  task,
  setTask,
  setIsOpen,
  setResponseBack,
  id
) => {
  try {
    if (!task) {
      // If newTitle is empty or falsy, exit the function
      EmptyTaskToast();
      return;
    }

    const res = await axios.post(
      `https://todo-app-server-lime.vercel.app/createTask/${id}`,
      {
        taskDesc: task,
      }
    );
    setResponseBack(res.data);
    fetchTodos();
    AddTaskToast();
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
  setTask("");
  setIsOpen(false);
};

export default createTask;
