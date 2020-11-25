import api from "../api";

export const login = async(email, password) => {
    try{ 
        const body = {
            Email: email,
            Senha: password
        };

        const response = await api().post("/seguranca/login", body);
        return response;
    } catch (error) {
        return null;
    }
}