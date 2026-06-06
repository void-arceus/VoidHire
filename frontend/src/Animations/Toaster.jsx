import { useToast } from "../context/ToastContest";

const Toaster = () => {
    const success = `border border-(--success)/60 text-(--success) shadow-(--success)`;
    const error = `border border-(--error) text-(--error) shadow-(--error)`;
    const { toastData } = useToast();

    return (
        <div
            className={`${toastData.show ? "opacity-100 translate-y-2" : "opacity-0 hidden translate-y-0"} ${toastData.type === "success" ? success : error} z-100 bg-white fixed w-fit max-w-70 top-20 right-4 py-3 px-4.5 rounded-xl cursor-pointer transition-all duration-300 linear`}
        >
            <p className="text-sm font-medium text-start">
                {toastData.message}
            </p>
        </div>
    );
};

export default Toaster;
