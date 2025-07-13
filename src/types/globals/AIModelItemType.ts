interface AIModelItemType {
    id: string;
    name: string,
    description: string,
    url: string
};

interface AIModelState {
    aiModels: AIModelItemType[];
};

export type { AIModelItemType, AIModelState };
