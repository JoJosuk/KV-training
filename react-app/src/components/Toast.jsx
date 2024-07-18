import React, { useContext } from "react";
// import { ToastContext } from "./ToastContext"; // Import the context
import { ToastContext } from "../ToastContext";

const Toast = () => {
  const { toast } = useContext(ToastContext);
  console.log("in toast ", toast);
  const toastStyles = {
    info: { backgroundColor: "lightblue" },
    success: { backgroundColor: "lightgreen" },
    error: { backgroundColor: "lightcoral" },
  };

  return (
    <div
      className="toast"
      style={{
        position: "fixed",
        left: 20,
        top: 20,
        padding: "1rem",
        borderRadius: "5px",
        zIndex: "100",
        ...toastStyles[toast.type],
      }}
    >
      {toast.message}
    </div>
  );
};

export default Toast;
