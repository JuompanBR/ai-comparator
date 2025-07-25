import { useMutation, useQuery } from "@tanstack/react-query";
import { ComparismCriteriaItem, ComparismResponseItem } from "../types";
import { CompareAPI } from "../services";

const baseURL = import.meta.env.VITE_JSON_SERVER_URL;

if (!baseURL) {
  throw new Error("An error occured while importing the base url.");
}

const useCompareQuery = (url: string, data: object[] | null) => {

  let compareAPI = new CompareAPI(url);

  return useQuery<ComparismResponseItem[], Error>({

    queryKey: ['compareData', JSON.stringify(data)], // JSON.stringify is unnecessary
    queryFn: async () => {

      if (!data) {
        throw new Error("No data provided for comparison");
      }
      return compareAPI.compare(data);
    },

    refetchOnWindowFocus: false,
    enabled: !!data,
  });
};

const useAddPostQuery = (url: string, data: ComparismCriteriaItem | null) => {
  let compareAPI = new CompareAPI(url);

  return useMutation({
    mutationKey: ['addCompareData', JSON.stringify(data)],
    mutationFn: async () => {
      if (!data) {
        throw new Error("No data provided to add.");
      }
      return compareAPI.add(data);
    },
  });
}

export { useCompareQuery, useAddPostQuery };