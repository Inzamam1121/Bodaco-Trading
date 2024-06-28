import AlertState from './Alert/Alert/AlertState'
import './App.css'
import Alert from './Component/Alert'
import Home from "./pages/Home"

function App() {

  return (
    <>
    <AlertState>
      <Alert/>
      <Home/>
    </AlertState>
    </>
  )
}

export default App
