import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // ここでTailwind CSSを読み込みます
import ActionButtons from './Components/ActionButtons.jsx'
import Banners from './Components/Banners.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="flex">
      <App />
      <Banners />
    </div>
  </React.StrictMode>,
)