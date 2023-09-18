import { DataCardProps } from "../../types";

export const Text = ({dataCard}: DataCardProps) => {
    return (
        <div>
            <p>
                {dataCard.body}
            </p>
        </div>
    )
}