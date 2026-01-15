import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // ここでTailwind CSSを読み込みます
import ActionButtons from './Components/ActionButtons.jsx'
import Banners from './Components/Banners.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="flex flex-col md:flex-row gap-8 max-w-[1600px] mx-auto">
        <div className="flex-1">
          <App />
        </div>
        <div className="w-full md:w-80 shrink-0 mt-8 md:mt-0">
          <div className="sticky top-4">
            <Banners />
          </div>
        </div>
      </div>
    </div>
  </React.StrictMode>,
)