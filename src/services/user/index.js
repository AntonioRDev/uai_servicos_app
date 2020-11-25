import api from "../api";

export const getUsers = async() => {
    try{ 
        const response = await api().get("/usuario");
        return response.data;
    } catch (error) {
        return null;
    }
}