import axios from "axios";

const API_PRODUCT_URL = "http://localhost:8080/"

class UserService {
    getAllUsers() {
        return axios.get(API_PRODUCT_URL + "user");
    }

    addUser(newUser) {
        axios.post(API_PRODUCT_URL + "addUser", newUser)
    }

    changeUserActivity (id) {
        axios.put(API_PRODUCT_URL + "changeUserActivity/" + id)
    }
}

export default new UserService();