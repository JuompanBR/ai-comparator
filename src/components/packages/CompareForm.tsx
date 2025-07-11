import { useState } from "react";
import { CompareAPI } from "../../services";
import Button from "./Button";
import { ComparismResponseItem } from "../../types";
import { Loader, Ban } from "lucide-react";

const CompareForm = () => {

    const [tag1, setTag1] = useState("");
    const [tag2, setTag2] = useState("");
    const [submittedTags, setSubmittedTags] = useState<string[]>([]);
    const [comparism, setComparism] = useState<ComparismResponseItem>({});
    const [loading, setLoading] = useState<boolean>(false);

    const handleClear = async () => {
        const response = confirm("Are you sure you want to clear ?");

        if (response == true) {
            setComparism({});
        }
        return;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = confirm("Do you confirm these selections ?");

        if (response == true) {
            setLoading(true);

            const fakeData = [{
                id: '1',
                data: "This is just test data"
            }]
            // fetch using the mock server
            const result = await CompareAPI.compare(fakeData);

            setComparism(result[0]);
            setLoading(false);
            //scroll to the results
            setTimeout(() => {
                document.getElementById("comparismReport")?.scrollIntoView({ behavior: "smooth" });
            }, 300)
        }
        // if (tag1.trim()) {
        //     setSubmittedTags([...submittedTags, tag1.trim()]);
        //     setTag1("");
        //     setTag2("");
        // }
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
                <Button
                    buttonType="submit"
                    disabled={loading}
                >
                    {loading == true ? <Loader className="animate-spin" /> : "Compare"}
                </Button>
            </form>
            <br />
            <br />
            <ul className="mt-6 list-disc list-inside text-slate-700">
                {submittedTags.map((tag, idx) => (
                    <li key={idx}>{tag}</li>
                ))}
            </ul>

            <br />
            <br />
            <br />
            {comparism.id && <section id="comparismResult" className="w-full h-fit my-5 flex flex-col justify-center items-start p-8 max-w-[1046px] mx-auto">
                <h2 id="comparismReport" className="font-bold text-2xl text-slate-700">Report</h2>
                <br />
                <table className="min-w-full border border-gray-300 divide-y divide-gray-200 table-fixed">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Id</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Text</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-4 py-2 text-lg text-gray-800">{comparism.id}</td>
                            <td className="px-4 py-2 text-lg text-amber-700">{comparism.text}</td>
                        </tr>
                    </tbody>
                    <tfoot className="relative">
                        <div className="relative float-right p-2 w-full flex flex-row-reverse">
                            <button type="button" onClick={handleClear} className="cursor-pointer opacity-70 hover:opacity-100 flex space-x-1 justify-center items-center text-sm text-amber-600 border border-gray-200 py-1.5 px-2.5 rounded-full"><span>Clear</span> <Ban size={18}/></button>
                        </div>
                    </tfoot>
                </table>
            </section>}
        </>
    )
}

export default CompareForm;