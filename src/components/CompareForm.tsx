import { Key, useState } from "react";
import { CompareAPI } from "../services";
import Button from "./Button";
import TagInput from "./TagInput";
import { AIModelItemType, ComparismCriteriaItem, ComparismResponseItem } from "../types";
import { Loader, Ban } from "lucide-react";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from '../stores/slices/comparismCriteriaSlice';
import { addModel, removeModel } from '../stores/slices/aiModelsSlice';

const CompareForm = () => {

    const selectedCriteria = useSelector((state: any) => state.comparismCriteria.comparismCriteria);
    const selectedModels = useSelector((state: any) => state.aiModels.aiModels);
    const storeDispatcher = useDispatch();

    const [tagInputs, enableAnimations] = useAutoAnimate();
    const [modelsInput, enableModelsAnimations] = useAutoAnimate();
    const [selectionsBox, enableSelectionsBoxAnimations] = useAutoAnimate();

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
            <div className="w-full max-w-5xl mt-6 px-4 space-y-4 relative mx-auto">
                <div ref={selectionsBox} className="w-full relative flex flex-wrap gap-y-5 justify-center items-start">
                    {selectedCriteria.length > 0 && <div className={`w-full lg:w-1/2 relative block text-center ${selectedModels.length > 0 ? 'border-r' : ''} lg:pe-9 border-slate-200`}>
                        <h2 className="font-normal text-lg text-slate-700 my-9">Set your Criteria</h2>
                        <div ref={tagInputs} className="relative flex flex-wrap gap-4 justify-center items-center transition-all">
                            {selectedCriteria.map((tag: ComparismCriteriaItem) => (
                                <TagInput id={tag.id} key={tag.id} onClickEvent={() => storeDispatcher(remove({ id: tag.id }))}>{tag.data}</TagInput>
                            ))}
                        </div>
                    </div>}
                    {selectedModels.length > 0 && <div className="w-full lg:w-1/2 relative block text-center lg:ps-9">
                        <h2 className="font-normal text-lg text-slate-700 my-9">Set your Models</h2>
                        <div ref={modelsInput} className="relative flex flex-wrap gap-4 justify-center items-center transition-all">
                            {selectedModels.map((tag: AIModelItemType) => (
                                <TagInput id={tag.id} key={tag.id} onClickEvent={() => storeDispatcher(removeModel({ id: tag.id }))}>{tag.data}</TagInput>
                            ))}
                        </div>
                    </div>}
                </div>
                <div className={`flex flex-col relative max-w-md w-full mx-auto ${selectedCriteria.length > 0 || selectedModels.length > 0 ? 'mt-15' : 'mt-12'}`}>
                    <label htmlFor="criteria" className="text-slate-400 text-xs mb-2">Type criterion, press enter</label>
                    <input
                        type="text"
                        name="criteria"
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
                        className="w-full p-2 border border-gray-300 rounded mb-6 placeholder-slate-400"
                        required />
                    <label htmlFor="criteria" className="text-slate-400 text-xs mb-2">Type model, press enter</label>
                    <input
                        type="text"
                        name="models"
                        value={aiProducts}
                        onChange={(e) => setAIs(e.target.value)}
                        onKeyUp={(e) => {
                            if (e.key == "Enter") {
                                storeDispatcher(
                                    addModel({
                                        data: {
                                            id: crypto.randomUUID(),
                                            data: aiProducts?.trim()
                                        }
                                    })
                                );
                                setAIs("");
                            }
                        }}
                        placeholder="Conversational AI"
                        className="w-full p-2 border border-gray-300 rounded mb-6 placeholder-slate-400"
                        required
                    />
                    <form
                        className="w-full relative"
                    >

                        <Button
                            buttonType="submit"
                            disabled={loading || selectedCriteria.length <= 0 || selectedModels.length <= 0}
                            classProps="!w-full"
                            clickEvent={() => handleSubmit}
                        >
                            {loading == true ? <Loader className="animate-spin" /> : "Compare"}
                        </Button>
                    </form>
                </div>
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