import axios from "axios";

const API_PRODUCT_URL = "http://localhost:8080/"

class AuthService {
    login(user) {
        return (
          axios
            .post("http://localhost:8080/auth/signin", user)
            //then ожидает возращание с бека
            //если есть accessTolen != 0 заносим в storage для хранения
            .then((response) => {
              if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
              }
              return response.data;
            })
        );
      }
    
}

export default new AuthService();