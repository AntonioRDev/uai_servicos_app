import api from "../api";

export const getUsers = async() => {
    try{ 
        const users = await api.get("/usuario");
        return users;
    } catch (error) {
        return null;
    }
}