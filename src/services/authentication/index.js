import api from "../api";
import { getToken, setToken, removeToken, getUserInfo } from "../local-storage"

export const login = async(email, password) => {
    try{ 
        const body = {
            Email: email,
            Senha: password
        };

        const response = await api().post("/login", body);
        await setToken(response.data.infoToken.token);

        return response;
    } catch (error) {
        console.log("error", error);
        return null;
    }
}

export const logoff = async() => {
    await removeToken();
}

export const verifyIfIsAlreadyLogged = async() => {
    const token = await getToken();
    const user = await getUserInfo();

    return token && (Object.keys(user) > 0) ? true : false;
}