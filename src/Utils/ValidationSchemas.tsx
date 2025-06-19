import * as yup from "yup";

export const AddProductSchema = yup.object().shape({
  name: yup.string().required("Product name is required"),
  title: yup.string().required("Project title is required"),
  client: yup.string().required("Client name is required"),
  progress: yup.number().typeError("Progress must be a number").min(0, "Minimum is 0%").max(100, "Maximum is 100%").required("Progress is required"),
});

export const AddFaqSchema = yup.object().shape({
  name: yup.string().required("Product name is required"),
  title: yup.string().required("Project title is required"),
});