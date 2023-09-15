import { DataCardProps } from "../../types";

export const Article = ({dataCard}: DataCardProps) => {
    return (
        <div>
            <p>
                {dataCard.body}
            </p>
        </div>
    )
}