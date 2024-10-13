import { createMutation } from "src/lib/factories/mutation";
import { axios } from "./config/axios";

export const useLogin = createMutation({
  mutationFn: async (data: { email: string; password: string }) => {
    const { data: res } = await axios.post("/api/login", data);
    return res;
  },
});
