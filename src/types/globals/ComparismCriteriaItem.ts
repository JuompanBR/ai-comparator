interface ComparismCriteriaItem {
    id: string;
    data: string
};

interface ComparismCriteriaState {
    comparismCriteria: ComparismCriteriaItem[];
};

export type { ComparismCriteriaItem, ComparismCriteriaState };
