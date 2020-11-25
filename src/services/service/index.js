import api from "../api";

export const getServices = async() => {
    try{ 
        const response = await api().get("/servico");
        return response.data;
    } catch (error) {
        return null;
    }
}