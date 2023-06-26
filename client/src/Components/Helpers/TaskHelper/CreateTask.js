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

    const res = await axios.post(`http://localhost:4000/createTask/${id}`, {
      taskDesc: task,
    });
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
