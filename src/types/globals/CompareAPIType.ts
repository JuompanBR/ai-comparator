import ComparismResponseItem from "./ComparismResponseItem";
import { ComparismCriteriaItem } from "./ComparismCriteriaItem";

type CompareAPIType = {
  data: ComparismCriteriaItem[];
  compare(): Promise<ComparismResponseItem[]>;
};

export default CompareAPIType;