import { useAuthStore } from '@/stores/useAuthStore';
import React from 'react';
import { Navigate } from 'react-router-dom';

function GuestRoute({ children }) {
  const { isAuth } = useAuthStore();
  

  if (isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default GuestRoute;