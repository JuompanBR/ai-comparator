import { CompareAPIType, ComparismCriteriaItem, ComparismResponseItem } from "../../types";

class CompareAPI implements CompareAPIType {
    compare(data: ComparismCriteriaItem[]): Promise<ComparismResponseItem[]> {
        throw new Error("Method not implemented.");
    }
    
    static async compare(data: ComparismCriteriaItem[]) {
        try {
            const response = await fetch('http://localhost:3001/compare', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

export default CompareAPI;