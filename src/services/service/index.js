import api from "../api";

export const getServices = async() => {
    try{ 
        const response = await api().get("/servico");
        return response.data;
    } catch (error) {
        console.log("getServices error", error);
        return null;
    }
}

export const getServicesByUser = async(userId) => {
    try{ 
        const response = await api().get(`/servico/usuario/${userId}`);
        return response.data;
    } catch (error) {
        console.log("getServices error", error);
        return null;
    }
}

export const getServicesByCategory = async(category) => {
    try{ 
        const response = await api().get(`/servico/categoria/${category}`);
        return response.data;
    } catch (error) {
        console.log("getServicesByCategory error", error);
        return null;
    }
}

export const deleteService = async(serviceId) => {
    try{
        const response = await api().delete(`/servico/${serviceId}`);
        return response;
    } catch (error) {
        console.log("deleteService error", error);
        return null;
    }
}