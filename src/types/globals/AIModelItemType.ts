interface AIModelItemType {
    id: string;
    data: string
};

interface AIModelState {
    aiModels: AIModelItemType[];
};

export type { AIModelItemType, AIModelState };
