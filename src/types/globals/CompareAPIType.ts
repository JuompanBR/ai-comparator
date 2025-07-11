import ComparismResponseItem from "./ComparismResponseItem";
import { ComparismCriteriaItem } from "./ComparismCriteriaItem";

type CompareAPIType = {
  data: ComparismCriteriaItem[];
  compare( data: ComparismCriteriaItem[]): Promise<ComparismResponseItem[]>;
};

export default CompareAPIType;