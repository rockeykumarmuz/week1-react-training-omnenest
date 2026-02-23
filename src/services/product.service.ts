import { apiInstance } from "../api/axios";
import type { Product } from "../types/productType";

export const ProductServcie = {

  async getAllProducts(): Promise<Product[]> {
    const response = await apiInstance.get<Product[]>("/products");
    // We return the data unwrapped so the component doesn't care about Axios headers/status
    return response.data
  },

}