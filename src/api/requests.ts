import axios from "axios";
import { loginUrl } from "./endpoints";

export const login = async (data: any) => {
  try {
    const response = await axios.post(loginUrl, data);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
