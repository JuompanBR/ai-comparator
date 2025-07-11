class CompareAPI {

    static async compare(data) {
        try {
            const response = await fetch('http://localhost:3001/compare', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log('Data:', data);
            return data;
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

export default CompareAPI;