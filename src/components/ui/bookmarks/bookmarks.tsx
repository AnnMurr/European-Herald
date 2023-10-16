import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from "../../../redux/store/store";
import { Text } from "./components/text/text";
import { NewsCard } from "../../reusable/newsCard/newsСard";
import { v4 as uuidv4 } from 'uuid';
import { pushCards } from "../../../redux/reducers/cardsReducer/cardsReducer";
import { Title } from "./components/title/title";

import { BookmarksWrap, Container, Wrapper } from "./styledBookmarks";

export const Bookmarks = () => {
    const userDataFromRedux = useAppSelector((state) => state.user)
    const userDataBookmarks = userDataFromRedux.userData?.bookmarks
    const dispatch = useAppDispatch()

    useEffect(() => {
        userDataBookmarks && dispatch(pushCards(userDataBookmarks))
    }, [])
    
    useEffect(() => {
        userDataBookmarks && dispatch(pushCards(userDataBookmarks))
    }, [])

    return (
        <Container>
            <Wrapper>
                <Title />
                <BookmarksWrap>
                    {userDataBookmarks?.length ?? 0 ?
                        userDataBookmarks?.map((bookmark) => <NewsCard type={'smallCard'} key={uuidv4()} dataCard={bookmark} />) :
                        <Text />}
                </BookmarksWrap>
            </Wrapper>
        </Container>
    )
}