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
                className={`${classProps} min-w-24 rounded-sm bg-[#e38716] py-1.5 px-3 lg:px-6 text-white font-bold ${disabled ? '' : 'hover:bg-[#e38716]/80 cursor-pointer shadow-sm'} transition-all flex justify-center items-center disabled:opacity-30`}
                onClick={clickEvent}
                type={buttonType}
                disabled={disabled}
                title={`${disabled ? 'This action cannot be performed!' : 'Click Me!'}`}
            >
                {children}
            </button>
        </>
    )
}

export default Button;