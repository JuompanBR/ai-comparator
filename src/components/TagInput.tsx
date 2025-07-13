import { TagInputProps } from "../types";
import { CircleX } from "lucide-react";

const TagInput: React.FC<TagInputProps> = ({children, id, onClickEvent}) => {

    return (
        <>
            <button type="button" onClick={onClickEvent} className="cursor-pointer hover:opacity-80 shadow-sm rounded-full font-bold py-1.5 ps-3.5 pe-2.5 gap-x-2.5 flex justify-center items-center bg-gray-100 text-slate-600 w-fit text-base">
                <span className="block">{ children }</span>
                <span className="block mt-px"><CircleX className="size-4"/></span>
            </button>
        </>
    )
}

export default TagInput;