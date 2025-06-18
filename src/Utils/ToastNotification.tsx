import { toast } from "react-toastify";

export const Toaster = (type: string, message: string) => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message || "Something went wrong, check API integration");
      break;
    case "warn":
      toast.warn(message);
      break;
    case "info":
      toast.info(message);
      break;
    default:
      toast(message);
  }
};
