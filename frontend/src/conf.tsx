import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react'
import ReactDOM from 'react-dom/client'
import Config from './Config.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Config />
  </React.StrictMode>,
);

