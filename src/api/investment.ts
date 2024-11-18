import { useQuery } from "@tanstack/react-query";
import axios from "./config/axios";
import { InvestmentBodyRequest, InvestmentResponse } from "./config/models";
import { createMutation } from "src/lib/factories/mutation";

export const useInvestments = () => {
  return useQuery<Array<InvestmentResponse>>({
    queryKey: ["investments", "get"],
    queryFn: async () => {
      const { data } = await axios.get("/v1/investments");
      return data;
    },
  });
};

export const useCreateInvestment = createMutation({
  mutationFn: async (data: InvestmentBodyRequest) => {
    const { data: res } = await axios.post("/v1/investments/", data);
    return res;
  },
});
