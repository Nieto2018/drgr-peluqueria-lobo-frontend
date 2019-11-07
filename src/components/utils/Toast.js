// Toast configuration
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
toast.configure()

const notify = (msg) => toast(msg);

export default notify