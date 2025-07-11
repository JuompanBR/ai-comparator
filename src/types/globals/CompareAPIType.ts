import { ComparismCriteriaItem } from "./ComparismCriteriaItem";
import ComparismResponseItem from "./ComparismResponseItem";

export type CompareAPIType = {
  data: ComparismCriteriaItem[];
  compare(): Promise<ComparismResponseItem[]>;
};