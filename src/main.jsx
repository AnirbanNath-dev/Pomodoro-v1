import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PomoProvider from './contexts/PomoProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PomoProvider>

    <App />
    </PomoProvider>


  </React.StrictMode>,
)
