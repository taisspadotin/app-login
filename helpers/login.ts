import * as yup from "yup";

export const schemaLogin = yup.object().shape({
  userName: yup.string().required("Preencha o nome de usuário"),
  password: yup.string().required("Preencha a senha"),
});
