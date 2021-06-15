import axios from "axios"
import config from "../config"

export const getApi = async (url, type) => {
    return await axios.get(`${url}/${config.user_id}/${type}`, {
        headers: {
            'Content-type' : 'application/json',
            'Authorization' : `Bearer ${config.token_api}`,
        }
    });
}