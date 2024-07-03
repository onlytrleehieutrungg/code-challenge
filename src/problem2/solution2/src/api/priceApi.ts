import { Price } from "../types/price";
import { axiosClient } from "../utils/http";

export const priceApi = {
  getAll(): Promise<Price[]> {
    return axiosClient.get("/prices.json");
  },
};
