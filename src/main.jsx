import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import StepContextProvider from "./context/StepContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StepContextProvider>
      <App />
    </StepContextProvider>
  </React.StrictMode>,
)
