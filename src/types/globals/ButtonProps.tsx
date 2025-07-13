import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    classProps?: string;
    clickEvent?: () => void;
    buttonType: "button" | "submit";
    disabled?: boolean;
};

export default ButtonProps;