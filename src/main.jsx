import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import global_en from "./Languages/en/global.json"
import global_es from "./Languages/es/global.json"
import global_de from "./Languages/de/global.json"
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

i18next.init({
  interpolation: {escapeValue: true},
  lng: "en",
  resources: {
    es:{
      global: global_es
    },
    en:{
      global: global_en
    },
    de:{
      global: global_de
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
  </React.StrictMode>,
)
