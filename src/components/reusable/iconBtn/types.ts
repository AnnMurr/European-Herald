import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

type SizeType =  "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl" 

export interface IconBtnProps {
    size: SizeType,
    icon: IconDefinition,
    onClickFunc?: (event: React.MouseEvent<HTMLButtonElement>) => void
}