import { CompareAPIType, ComparismCriteriaItem, ComparismResponseItem } from "../../../types";

class CompareAPI implements CompareAPIType {
    url: string;

    constructor(url: string) {
        this.url = url;
    };

    async compare(data: object[]): Promise<ComparismResponseItem[]> {
        try {
            const response = await fetch(this.url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const result = await response.json();
            return result;
        } catch (error: any) {
            throw new Error("An unexpected error occured: " + error.message);
        }
    };

    async add(data: ComparismCriteriaItem): Promise<void> {
        try {
            await fetch(this.url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (error: any) {
            throw new Error("An unexpected error occured: " + error.message);
        }
    };
}

export default CompareAPI;