import api from "../api";

export const getServices = async() => {
    try{ 
        const services = await api.get("/servico");
        return services;
    } catch (error) {
        return null;
    }
}