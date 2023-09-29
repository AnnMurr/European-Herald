import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

type SizeType =  "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl" 

export interface IconBtnProps {
    color?: string,
    size: SizeType,
    icon: IconDefinition,
    classname?: string,
    onClickFunc?: (event: React.MouseEvent<HTMLButtonElement>) => void
}