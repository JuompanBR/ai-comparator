import { Key, useState } from "react";
import { CompareAPI } from "../../services";
import Button from "./Button";
import TagInput from "./TagInput";
import { ComparismCriteriaItem, ComparismResponseItem } from "../../types";
import { Loader, Ban } from "lucide-react";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from '../../stores/slices/comparismCriteriaSlice';

const CompareForm = () => {

    const selectedCriteria = useSelector((state: any) => state.comparismCriteria.comparismCriteria);
    const storeDispatcher = useDispatch();

    const [tagInputs, enableAnimations] = useAutoAnimate(/* optional config */)
    const [criteria, setCriteria] = useState("");
    const [aiProducts, setAIs] = useState("");
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
            }];
            let result = [{}];
            try {
                // fetch using the mock server
                result = await CompareAPI.compare(fakeData);
                setComparism(result[0]);

                // Display the result
                setTimeout(() => {
                    document.getElementById("comparismReport")?.scrollIntoView({ behavior: "smooth" });
                }, 300);

            } catch (e) {
                alert("An error occured while getting the resource.");
            }
            setLoading(false);
            //scroll to the results
        }
        // if (criteria.trim()) {
        //     setSubmittedTags([...submittedTags, criteria.trim()]);
        //     setCriteria("");
        //     setAIs("");
        // }
    };
    return (
        <>
            <div className="w-full max-w-md mt-6 px-4 space-y-4 relative mx-auto">
                <h2 id="comparismReport" className="font-normal text-lg text-slate-700 my-7">Set your Criteria</h2>
                <div ref={tagInputs} className="relative flex flex-wrap gap-4 justify-center items-center transition-all">
                    {selectedCriteria.map((tag: ComparismCriteriaItem) => (
                        <TagInput id={tag.id} key={tag.id}>{tag.data}</TagInput>
                    ))}
                </div>
                <br />
                <input
                    type="text"
                    value={criteria}
                    onChange={(e) => setCriteria(e.target.value)}
                    onKeyUp={(e) => {
                        if (e.key == "Enter") {
                            storeDispatcher(
                                add({
                                    data: {
                                        id: crypto.randomUUID(),
                                        data: criteria?.trim()
                                    }
                                })
                            );
                            setCriteria("");
                        }
                    }}
                    placeholder="Criteria"
                    className="w-full p-2 border border-gray-300 rounded"
                    required />
                <form
                    onSubmit={handleSubmit}
                    className=""
                >
                    <input
                        type="text"
                        value={aiProducts}
                        onChange={(e) => setAIs(e.target.value)}
                        placeholder="Conversational AI"
                        className="w-full p-2 border border-gray-300 rounded"
                        required
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
                                <button type="button" onClick={handleClear} className="cursor-pointer opacity-70 hover:opacity-100 flex space-x-1 justify-center items-center text-sm text-amber-600 border border-gray-200 py-1.5 px-2.5 rounded-full"><span>Clear</span> <Ban size={18} /></button>
                            </div>
                        </tfoot>
                    </table>
                </section>}
            </div>
        </>
    )
}

export default CompareForm;