import { useQuery } from "@tanstack/react-query";
import { axios } from "./config/axios";

export const useInvestments = () => {
  return useQuery({
    queryKey: ["investments", "get"],
    queryFn: async () => {
      const { data } = await axios.get("/v1/investments");
      return data;
    },
  });
};
