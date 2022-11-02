
import { toast } from 'react-toastify';

const defaultConfig = {
    autoClose: 3000,
    position: toast.POSITION.TOP_CENTER,
    pauseOnHover: true,
    closeOnClick: true,
    hideProgressBar: true,
    pauseOnHover: true,
    pauseOnFocusLoss: true,
    draggable: true,
    draggablePercent: 70,
    theme: "colored",
}


//https://fkhadra.github.io/react-toastify/introduction
export const ToastWrapper = (passedOptions={}) =>{
    const launchToast = (content, type) =>{
        return toast(content, {...defaultConfig, ...passedOptions, type: type});
    }

    return {
        success: (content) =>{
            return launchToast(content, "success");
        },
        error: (content) =>{
            return launchToast(content, "error");
        },
        warn: (content) =>{
            return launchToast(content, "warn");
        },
        info: (content) =>{
            return launchToast(content, "info");
        },
        default: (content) =>{
            return launchToast(content, "default");
        },
        exists: (toastID) =>{
            return toast.isActive(toastID);
        },
        close: (toastID)=>{
            toast.dismiss(toastID);
            //toast.dismiss();
        }
    }
}
