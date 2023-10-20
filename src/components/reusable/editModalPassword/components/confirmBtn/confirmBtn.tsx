import { Button } from "../../../button/button";
import { ConfirmBtnProps } from "../../types";
import { Inner } from "./styledConfirmBtn";

export const ConfirmBtn: React.FC<ConfirmBtnProps> = ({ passwordСheck }) => {
    return (
        <Inner>
            <Button style={{textTransform: 'initial'}} func={passwordСheck} type="button" text="Confirm" />
        </Inner>
    )
}