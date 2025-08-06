import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import AppRoutes from './AppRoutes'
import { AuthProvider } from "./context/AuthContext";
import { ToastProvider } from "./context/ToastContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ToastProvider>
  </StrictMode>
);