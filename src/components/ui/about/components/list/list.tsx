import { ListTextContent } from "../../textContent";
import { Item } from "./components/item/item";
import { Items } from "./styledList";

export const List = () => {
    return (
        <Items>
            <Item spanText={'Unbiased Reporting'} text={ListTextContent["Unbiased Reporting"]} />
            <Item spanText={'Accuracy'} text={ListTextContent["Accuracy"]} />
            <Item spanText={'Timeliness'} text={ListTextContent["Timeliness"]} />
            <Item spanText={'Community Engagement'} text={ListTextContent["Community Engagement"]} />
        </Items>
    )
}