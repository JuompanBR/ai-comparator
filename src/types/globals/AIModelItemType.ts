import LocalizedDataType from "./LocalizedDataType";

interface AIModelItemType {
    id: string;
    name: string,
    description: LocalizedDataType,
    url: string
};

interface AIModelState {
    aiModels: AIModelItemType[];
};

export type { AIModelItemType, AIModelState };
