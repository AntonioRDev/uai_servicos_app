import api from "../api";

export const getUsers = async () => {
  try {
    const response = await api().get("/usuario");
    return response.data;
  } catch (error) {
    return null;
  }
};

export const createUser = async (
  email,
  password,
  name,
  rg,
  cpf,
  bDate,
  gender,
  address,
  phone
) => {
  try {
    const body = {
      Nome: name,
      Email: email,
      DataNascimento: bDate,
      Genero: gender,
      Telefone: phone,
      Endereco: address,
      Cpf: cpf,
      RG: Number(rg),
      Senha: password,
    };
    const response = await api().post("/usuario", body);
    return response.data;
  } catch (error) {
    console.log("createUser error", error);
    return null;
  }
};
