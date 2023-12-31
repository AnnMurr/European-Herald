export interface CardType {
    authors: Array<object>,
    body: string,
    dataType: string,
    date: string,
    dateTime: string,
    dateTimePub: string,
    eventUri: string | null,
    image: string,
    isDuplicate: boolean,
    lang: string,
    relevance: number,
    sentiment: number,
    sim: number,
    source: {
        dataType: string,
        title: string,
        uri: string
    },
    time: string,
    title: string,
    uri: string,
    url: string,
    wgt: number
}
export interface InitialStateType {
    cards: Array<CardType>,
    filteredCards: Array<CardType>,
    categorySports: Array<CardType>,
    categoryHealth: Array<CardType>,
    categoryArts: Array<CardType>,
    categoryBusiness: Array<CardType>,
    foundCards: Array<CardType>,
    loading: boolean,
    error: string | null,
    searchValueOfHeaderInput: string | null,
}