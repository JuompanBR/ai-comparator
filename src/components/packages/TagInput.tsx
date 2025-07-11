import { ReactNode } from "react";
import { CircleX } from "lucide-react";
import { useDispatch } from "react-redux";
import { remove } from "../../stores/slices/comparismCriteriaSlice";

interface TagInputProps {
    id: string,
    text?: string,
    children?: ReactNode
};

const TagInput = ({children, id} : TagInputProps) => {
    const storeDispatcher = useDispatch();

    return (
        <>
            <button type="button" onClick={() => storeDispatcher(remove({id: id}))} className="cursor-pointer hover:opacity-80 shadow-sm rounded-full font-bold py-1.5 ps-3.5 pe-2.5 gap-x-2.5 flex justify-center items-center bg-gray-100 text-slate-600 w-fit text-base">
                <span className="block">{ children }</span>
                <span className="block mt-px"><CircleX className="size-4"/></span>
            </button>
        </>
    )
}

export default TagInput;