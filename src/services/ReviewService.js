import axios from "axios";

const API_PRODUCT_URL = "http://localhost:8080/"

class ReviewService {
    getAllReviews() {
        return axios.get(API_PRODUCT_URL + "reviews");
    }

    addReview(newReview) {
        axios.post(API_PRODUCT_URL + "addReview", newReview)
    }
}

export default new ReviewService();