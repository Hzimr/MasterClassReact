import React from 'react';
import ReactDOM from 'react-dom/client'
import './global.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

// TyperScript = ferramenta de tipagem(obrigatória ou opcional, depende da declaração) para evitar
// programação imperativa (Javascript) vs. programação declarativa

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)


//Componentes: Pequenas Partes de interface reutilizáveis.