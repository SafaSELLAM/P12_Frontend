/**
 * The entry point for the React application.
 * 
 * This code initializes the React application and renders the main component `App` inside the root DOM element.
 * It uses `StrictMode` to help identify potential problems in the app during development.
 * 
 * @module index
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Components/App/App.jsx'

/**
 * Renders the main application component in the DOM.
 * 
 * @function
 * @returns {void}
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
