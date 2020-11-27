import api from "../api";

export const getServices = async() => {
    try{ 
        const response = await api().get("/servico");
        return response.data;
    } catch (error) {
        return null;
    }
}

export const getServicesByUser = async(userId) => {
    try{ 
        const response = await api().get(`/servico/usuario/${userId}`);
        return response.data;
    } catch (error) {
        return null;
    }
}