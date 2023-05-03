import * as Yup from "yup";

export const sessionValidation = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(8),
});
