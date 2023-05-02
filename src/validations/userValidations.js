import * as Yup from "yup";

export const userValidation = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required().min(8),
});
