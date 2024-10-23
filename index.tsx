import React from 'react';
import { createRoot } from 'react-dom/client';
import './src/app/styles/index.css';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './src/routeTree.gen'; // Убедись, что путь корректен

// Создаем маршрутизатор
export const router = createRouter({ routeTree });

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
