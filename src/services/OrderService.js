import axios from "axios";

const API_URL = "http://localhost:8080/"

class OrderService {
    getOrder(userId) {
        return axios.get(API_URL + "order/" + userId);
    }

    addOrder(newOrder) {
        axios.post(API_URL + "addOrder", newOrder)
    }

    // deleteCartElement(id) {
    //     axios.delete(API_PRODUCT_URL + "deleteCartElement/" + id)
    // }

    // getCartSum(userId) {
    //     return axios.get(API_PRODUCT_URL + "cartSum/" + userId);
    // }
}

export default new OrderService();