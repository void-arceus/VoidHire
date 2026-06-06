import { createContext, useContext, useState, useRef } from "react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
    const [toastData, setToastData] = useState({
        message: "",
        type: "",
        show: false,
    });
    const timeoutFn = useRef(null);
    function showToast(message, type) {
        setToastData({ message, type, show: true });
        let timer = type === "success" ? 2000 : 3000;
        if (timeoutFn.current != null) clearTimeout(timeoutFn.current);
        timeoutFn.current = setTimeout(() => {
            setToastData({ message: "", type: "", show: false });
        }, timer);
    }
    return (
        <ToastContext.Provider value={{ showToast, toastData }}>
            {children}
        </ToastContext.Provider>
    );
}

export const useToast = () => useContext(ToastContext);
