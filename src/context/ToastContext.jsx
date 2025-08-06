import { createContext, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  // Wrapper for toastify toast function
  const showToast = (message, options = {}) => {
    toast(message, options);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
