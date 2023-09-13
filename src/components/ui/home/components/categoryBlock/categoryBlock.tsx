import { useAppSelector } from "../../../../../redux/store/store";
import { Block } from "./components/block/block";

export const CategoryBlock = () => {
    const isLoading = useAppSelector((state) => state.loading)
    const filteredCardsFromRedux = useAppSelector((state) => state)

    return (
        <>
            {!isLoading ? <div>
                <Block filteredCards={filteredCardsFromRedux.categorySports} />
                <Block filteredCards={filteredCardsFromRedux.categoryHealth} />
                <Block filteredCards={filteredCardsFromRedux.categoryArts} />
                <Block filteredCards={filteredCardsFromRedux.categoryBusiness} />
            </div> : null}
        </>
    )
}