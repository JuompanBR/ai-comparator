import ComparismResponseItem from "./ComparismResponseItem";
import { ComparismCriteriaItem } from "./ComparismCriteriaItem";

interface CompareAPIType {
  compare: (data: ComparismCriteriaItem[]) => Promise<ComparismResponseItem[]>;
};

export default CompareAPIType;