/**
 * @file App.jsx
 * @description This file defines the main component of the application.
 * It includes the top banner (TopBanner) and the dashboard (Dashboard).
 */

import './App.css'
import { TopBanner } from '../TopBanner/TopBanner';
import { Dashboard } from '../Dashboard/Dashboard';

/**
 * Main application component.
 * 
 * @function App
 * @returns {JSX.Element} The main component containing the top banner and the dashboard.
 */
function App() {

  return (
    <div className="app column ">
      <TopBanner />
      <div className="content row">
        <Dashboard />
      </div>
    </div>
  )
}

export default App
