import { ComparismCriteriaItem } from "./ComparismCriteriaItem";
import ComparismResponseItem from "./ComparismResponseItem";

type CompareAPIType = {
    data: ComparismCriteriaItem[],
    compare(): ComparismResponseItem[]
};

export default CompareAPIType;