import './App.css'
import { TopBanner } from '../TopBanner/TopBanner';
import { Dashboard } from '../Dashboard/Dashboard';

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
