import * as Yup from "yup";

export const commentValidation = Yup.object({
  content: Yup.string().required(),
});
