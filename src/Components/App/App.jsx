import './App.css'
import { TopBanner } from '../TopBanner/TopBanner';
import { LeftBanner } from '../LeftBanner/LeftBanner';
function App() {

  return (
    <div className="app column ">
      <TopBanner />
      <LeftBanner />
      <div className="content">
        
      </div>
    </div>
  )
}

export default App
