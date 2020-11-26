import axios from "axios";

const baseUrl = "http://uaiservicosapp.azurewebsites.net";

export default () => {
    return axios.create({
        baseURL: baseUrl
    });
}