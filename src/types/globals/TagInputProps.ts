import { ReactNode } from "react";

interface TagInputProps {
    id: string,
    text?: string,
    children?: ReactNode,
    onClickEvent: React.MouseEventHandler<HTMLButtonElement>,
};

export default TagInputProps;