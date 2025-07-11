import { useState } from "react";
import { CompareAPI } from "../../services";

const CompareForm = () => {

    const [tag1, setTag1] = useState("");
    const [tag2, setTag2] = useState("");
    const [submittedTags, setSubmittedTags] = useState<string[]>([]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = confirm("Do you confirm this comparism ?");

        if (response) {

            const fakeData = [{
                id: '1',
                data: "This is just test data"
            }]
            // fetch using the mock server
            const result = await CompareAPI.compare(fakeData);
            
        }
        if (tag1.trim()) {
            setSubmittedTags([...submittedTags, tag1.trim()]);
            setTag1("");
            setTag2("");
        }
    };
    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md mt-6 px-4 space-y-4 relative mx-auto"
            >
                <input
                    type="text"
                    value={tag1}
                    onChange={(e) => setTag1(e.target.value)}
                    placeholder="Tag 1"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    value={tag2}
                    onChange={(e) => setTag2(e.target.value)}
                    placeholder="Tag 2"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                    type="submit"
                    className="bg-amber-600 text-white py-2 px-4 rounded hover:bg-amber-700"
                >
                    Add Tag 1
                </button>
            </form>

            <ul className="mt-6 list-disc list-inside text-slate-700">
                {submittedTags.map((tag, idx) => (
                    <li key={idx}>{tag}</li>
                ))}
            </ul>
        </>
    )
}

export default CompareForm;