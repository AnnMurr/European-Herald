import { useState } from "react";
import { Button } from "../../../../reusable/button/button";
import { ConfirmationModal } from "./components/confirmationModal/confirmationModal";

export const DeleteAccountBtn = () => {
    const [isConfirmationModal, setIsConfirmationModal] = useState<boolean>(false)

    return (
        <>
            <Button
                func={() => setIsConfirmationModal(true)}
                style={{ textTransform: 'initial' }}
                backgroundColor={'error'}
                text={'Delete account'}
                type={'button'} />
            {isConfirmationModal ? <ConfirmationModal closeModal={setIsConfirmationModal} /> : null}
        </>
    )
}