import { toast } from "react-hot-toast";

export const AddTodoToast = () => {
  toast.success("Todo Added Successfully");
};

export const EditTodoToast = () => {
  toast.success("Todo Updated Successfully");
};

export const EmptyTodoToast = () => {
  toast.error("Title Cannot Be Empty");
};

export const DeleteTodoToast = () => {
  toast.success("Todo Deleted Successfully");
};

export const DuplicateTodoToast = () => {
  toast.error("Duplicate Todo");
};
