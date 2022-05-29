import axios from "axios";

const API_PRODUCT_URL = "http://localhost:8080/"

class CartService {
    async getCart(userId) {
        return await axios.get(API_PRODUCT_URL + "cart/" + userId);
    }

    async addElementToCart(newElement) {
        await axios.post(API_PRODUCT_URL + "addElementToCart", newElement)
    }

    async deleteCartElement(id) {
        await axios.delete(API_PRODUCT_URL + "deleteCartElement/" + id)
    }

    getCartSum(userId) {
        return axios.get(API_PRODUCT_URL + "cartSum/" + userId);
    }

    clearCart(userId) {
        axios.delete(API_PRODUCT_URL + "clearCart/" + userId)
    }
}

export default new CartService();