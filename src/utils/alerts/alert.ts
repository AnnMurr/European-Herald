import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type AlertType = 'success' | 'warning' | 'error' | 'info';

interface ShowToastMessageProps {
    type: AlertType,
    text: string
}

export const showToastMessage = ({ type, text }: ShowToastMessageProps) => {
    if (type === 'success') {
        return toast.success(text, {
            position: toast.POSITION.TOP_RIGHT
        })
    } else if (type === 'error') {
        return toast.error(text, {
            position: toast.POSITION.TOP_RIGHT
        })
    } else if (type === 'warning') {
        return toast.warning(text, {
            position: toast.POSITION.TOP_RIGHT
        })
    } else if (type === 'info') {
        return toast.info(text, {
            position: toast.POSITION.TOP_RIGHT
        })
    }
}