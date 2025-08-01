import axios from "axios";

class ProductApi {
    async getProducts() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/products`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}

export const productApi = new ProductApi();