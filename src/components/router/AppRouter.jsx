import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { routes } from './routes';

export default function AppRouter() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      {routes.map(route => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
