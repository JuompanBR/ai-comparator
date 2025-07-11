import { CompareAPIType, ComparismCriteriaItem } from "../../types";


class CompareAPI implements CompareAPIType {
    data: ComparismCriteriaItem[]
    constructor(data: ComparismCriteriaItem[]) {

        this.data = data;
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
            console.log('Data:', result);
            return result;
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

export default CompareAPI;