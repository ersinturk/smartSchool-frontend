import * as Yup from "yup";

export const ContactSchema = Yup.object({
  name: Yup.string().required("required"),
  email: Yup.string().email("invalid email").required("required"),
  subject: Yup.string().required("required"),
  message: Yup.string().required("required"),
});
