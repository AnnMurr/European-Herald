import { Link } from "react-router-dom";

import { AccessControlBtnsProps } from "../../../../types";
import { Button } from "../../../../../../reusable/button/button";

import { BtnWrapper } from "./styledButtons";

export const AccessControlBtns: React.FC<AccessControlBtnsProps> = ({ closeModal }) => {
  return (
    <BtnWrapper>
      <Link to={'./login'}>
        <Button
          type={'button'}
          text={'Sign In'}
          func={() => closeModal(false)}
          style={{
            margin: "10px  0",
            width: '100%'
          }} />
      </Link>
      <Link to={'./registration'}>
        <Button
          type={'button'}
          text={'Sign Up'}
          func={() => closeModal(false)}
          style={{
            margin: "10px  0",
            width: '100%'
          }} />
      </Link>
    </BtnWrapper>
  )
}