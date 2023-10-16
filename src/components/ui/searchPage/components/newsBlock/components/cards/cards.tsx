import { CardsProps } from "../../../../types";
import { RenderCards } from "../../../../../../reusable/paginationCards/renderCards";

export const Cards: React.FC<CardsProps> = ({ foundСards }) => {

    return (
        <>
            <RenderCards type={'foundСards'} />
        </>
    )
}