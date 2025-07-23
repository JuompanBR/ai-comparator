import { useQuery } from "@tanstack/react-query";
import { ComparismResponseItem } from "../types";
import { CompareAPI } from "../services";

const useCompareQuery = (data: object[] | null) => {
  return useQuery<ComparismResponseItem[], Error>({
    queryKey: ['compareData', JSON.stringify(data)], // JSON.stringify is unnecessary
    queryFn: async () => {
      if (!data) {
        throw new Error("No data provided for comparison");
      }
      return CompareAPI.compare(data);
    },
    refetchOnWindowFocus: false,
    enabled: !!data,
  });
};

export default useCompareQuery;
