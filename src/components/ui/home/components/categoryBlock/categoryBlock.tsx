import { useAppSelector } from "../../../../../redux/store/store";
import { Block } from "./components/block/block";

export const CategoryBlock = () => {
    const isLoading = useAppSelector((state) => state.newsCards.loading)
    const filteredCardsFromRedux = useAppSelector((state) => state.newsCards)

    return (
        <>
            {!isLoading ? 
            <div>
                    <Block name={'Sports'} filteredCards={filteredCardsFromRedux.categorySports} />
                    <Block name={'Health'} filteredCards={filteredCardsFromRedux.categoryHealth} />
                    <Block name={'Arts'} filteredCards={filteredCardsFromRedux.categoryArts} />
                    <Block name={'Business'} filteredCards={filteredCardsFromRedux.categoryBusiness} />
            </div> :
             null}
        </>
    )
}