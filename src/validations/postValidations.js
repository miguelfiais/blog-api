import * as Yup from "yup";

export const postValidation = Yup.object({
  title: Yup.string().required(),
  content: Yup.string().required(),
});
