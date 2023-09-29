import { useAppDispatch, useAppSelector } from "../../../redux/store/store";
import { Container, Wrapper } from "./styledBookmarks";
import { Text } from "./components/text/text";
import { NewsCard } from "../../reusable/newsCard/newsСard";
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { pushCards } from "../../../redux/reducers/cardsReducer";

export const Bookmarks = () => {
    const userDataFromRedux = useAppSelector((state) => state.user)
    const userDataBookmarks = userDataFromRedux.userData?.bookmarks
    const dispatch = useAppDispatch()

    useEffect(() => {
        userDataBookmarks && dispatch(pushCards(userDataBookmarks))
    }, [])
    
    return (
        <Container>
            <Wrapper>
                {userDataBookmarks?.length ?? 0 ?
                    userDataBookmarks?.map((bookmark) => <NewsCard cardClass={'card'} type={'BigCard'} key={uuidv4()} dataCard={bookmark} />) :
                    <Text />}
            </Wrapper>
        </Container>
    )
}