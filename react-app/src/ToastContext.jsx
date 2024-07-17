import React, { createContext, useState, useContext, useEffect } from "react";

const ToastContext = createContext({
  showToast: () => {},
});

const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({ message: "", type: "info" });

  const showToast = (message, type = "info") => {
    console.log("trying toast mssg", message, toast);
    setToast({ message, type });
  };
  useEffect(() => {
    if (toast.message) {
      const timeoutId = setTimeout(() => {
        setToast({ message: "", type: "info" });
      }, 10000);

      return () => clearTimeout(timeoutId);
    }
  }, [toast.message]);

  return (
    <ToastContext.Provider value={{ toast, showToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export { ToastContext, ToastProvider };
