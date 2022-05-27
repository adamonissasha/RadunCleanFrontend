import axios from "axios";

const API_PRODUCT_URL = "http://localhost:8080/"

class ProductService {
    getAllProducts() {
        return axios.get(API_PRODUCT_URL + "product");
    }

    addProduct(newProduct) {
        axios.post(API_PRODUCT_URL + "create", newProduct)
    }

    deleteProduct(id) {
        axios.delete(API_PRODUCT_URL + "delete/" + id)
    }

}

export default new ProductService();