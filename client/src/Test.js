import { toast } from "react-hot-toast";

const ToastCall = (title) => {
  toast.success(`Hii ${title}`);
};

const CallToast = (title) => {
  ToastCall(title);
};

export default CallToast;
