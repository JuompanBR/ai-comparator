import LocalizedDataType from "./LocalizedDataType";

interface ComparismCriteriaItem {
    id: string;
    data: LocalizedDataType;
};

interface ComparismCriteriaState {
    comparismCriteria: ComparismCriteriaItem[];
};

export type { ComparismCriteriaItem, ComparismCriteriaState };
