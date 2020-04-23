// https://fkhadra.github.io/react-toastify/introduction/

// Toast configuration
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
toast.configure()

const notify = (msg, type) => {
    switch(type){
        case 'info':
            toast.info(msg)
            break
        case 'success':
            toast.success(msg)
            break
        case 'warn':
            toast.warn(msg)
            break
        case 'error':
            toast.error(msg)
            break
        default:
            toast(msg);
    }
}

export default notify