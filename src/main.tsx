
import { createRoot } from 'react-dom/client';  // Именованный импорт
import App from './App'
import * as React from 'react';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
