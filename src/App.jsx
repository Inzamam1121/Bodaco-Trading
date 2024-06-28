import AlertState from './Alert/Alert/AlertState'
import './App.css'
import Alert from './Component/Alert'
import Home from "./Pages/Home"

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
