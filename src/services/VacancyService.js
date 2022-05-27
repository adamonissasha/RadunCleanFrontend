import axios from "axios";

const API_PRODUCT_URL = "http://localhost:8080/"

class VacancyService {
    getAllVacancies() {
        return axios.get(API_PRODUCT_URL + "vacancy");
    }

    addVacancy(newVacancy) {
        axios.post(API_PRODUCT_URL + "addVacancy", newVacancy)
    }

    deleteVacancy(id) {
        axios.delete(API_PRODUCT_URL + "deleteVacancy/" + id)
    }

}

export default new VacancyService();