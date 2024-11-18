import { createMutation } from "src/lib/factories/mutation";
import axios from "./config/axios";
import { JWTToken } from "./config/models";

export const useLogin = createMutation({
  mutationFn: async (data: { email: string; password: string }) => {
    const { data: res } = await axios.post<JWTToken>("/api/token/", data);
    return res;
  },
});

export const useRegister = createMutation({
  mutationFn: async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    const { data: res } = await axios.post("/v1/users/", data);
    return res;
  },
});
