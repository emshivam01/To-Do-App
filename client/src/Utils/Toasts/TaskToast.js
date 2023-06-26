import { toast } from "react-hot-toast";

export const AddTaskToast = () => {
  toast.success("Task Added Successfully");
};

export const DeleteTaskToast = () => {
  toast.success("Task Deleted Successfully");
};

export const EmptyTaskToast = () => {
  toast.error("Task Cannot be Empty");
};
