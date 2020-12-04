import axios from "axios";

const baseUrl = "https://uai-servicos.azurewebsites.net/";

export default () => {
    return axios.create({
        baseURL: baseUrl
    });
}