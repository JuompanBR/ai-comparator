import { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode;
    classProps?: string;
    clickEvent?: () => void;
    buttonType: "button" | "submit";
    disabled?: boolean;
}

const Button = ({ children, classProps, clickEvent, buttonType = "button", disabled }: ButtonProps) => {

    return (
        <>
            <button
                className={`${classProps} cursor-pointer min-w-24 rounded-sm bg-[#e38716] py-1.5 px-3 lg:px-6 text-white font-bold hover:bg-[#e38716]/80 transition-all shadow-sm flex justify-center items-center disabled:opacity-30 disabled:hover:opacity-30`}
                onClick={clickEvent}
                type={buttonType}
                disabled={disabled}
            >
                {children}
            </button>
        </>
    )
}

export default Button;