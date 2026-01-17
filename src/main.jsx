import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css' // ここでTailwind CSSを読み込みます
import ScreenManager from './Components/ScreenManager.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScreenManager />
  </React.StrictMode>,
)