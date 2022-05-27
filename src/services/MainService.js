import axios from "axios";

const API_PRODUCT_URL = "http://localhost:8080/"

class MainService {
    login() {
        return axios.get(API_PRODUCT_URL + "main");
    }

}

export default new MainService();