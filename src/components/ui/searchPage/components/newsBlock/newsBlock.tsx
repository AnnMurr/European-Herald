import { useEffect, useState } from "react";

import { Cards } from "./components/cards/cards";
import { Text } from "./components/text/text";
import { NewsBlockProps } from "../../types";

import { CardsInner } from "./styledNewsBlock";

export const NewsBlock: React.FC<NewsBlockProps> = ({ foundСards, searchValue }) => {
    const [text, setText] = useState<string>('')

    useEffect(() => {
        setText(searchValue)
    }, [foundСards]);

    return (
        <div>
            <CardsInner>
                {foundСards.length > 0 ?
                    <Cards /> :
                    <Text text={text} />}
            </CardsInner>
        </div>
    )
}

