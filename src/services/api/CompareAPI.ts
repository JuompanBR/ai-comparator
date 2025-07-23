import { CompareAPIType, ComparismCriteriaItem, ComparismResponseItem } from "../../types";

class CompareAPI implements CompareAPIType {
    compare(data: ComparismCriteriaItem[]): Promise<ComparismResponseItem[]> {
        throw new Error("Method not implemented.");
    }
    
    static async compare(data: any): Promise<ComparismResponseItem[]> {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${data[0].number}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error:', error);
            return [];
        }
    }
}

export default CompareAPI;