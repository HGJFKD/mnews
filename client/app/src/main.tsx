import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"

import App from './App.tsx';
import { I18nextProvider } from 'react-i18next';
import i18next from './featchers/global/themes/translation/i18next.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <App/>
    </I18nextProvider>
  </React.StrictMode>,
)
