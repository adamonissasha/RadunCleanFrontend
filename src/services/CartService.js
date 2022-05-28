import axios from "axios";

const API_PRODUCT_URL = "http://localhost:8080/"

class CartService {
    getCart(userId) {
        return axios.get(API_PRODUCT_URL + "cart/" + userId);
    }

    addElementToCart(newElement) {
        axios.post(API_PRODUCT_URL + "addElementToCart", newElement)
    }

    deleteCartElement(id) {
        axios.delete(API_PRODUCT_URL + "deleteCartElement/" + id)
    }

    getCartSum(userId) {
        return axios.get(API_PRODUCT_URL + "cartSum/" + userId);
    }

    clearCart(userId) {
        axios.delete(API_PRODUCT_URL + "clearCart/" + userId)
    }
}

export default new CartService();