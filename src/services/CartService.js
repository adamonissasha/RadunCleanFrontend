import axios from "axios";

const API_PRODUCT_URL = "http://localhost:8080/"

class CartService {
    getCart() {
        return axios.get(API_PRODUCT_URL + "cart");
    }

    addElementToCart(newElement) {
        axios.post(API_PRODUCT_URL + "addElementToCart", newElement)
    }

    deleteCartElement(id) {
        axios.delete(API_PRODUCT_URL + "deleteCartElement/" + id)
    }
}

export default new CartService();