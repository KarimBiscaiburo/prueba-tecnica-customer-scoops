import { useState } from 'react'
import './App.css'
import BarraProgreso from './components/ProgressBar'

const barraProgresoPorcentaje: string[] = ["16.6%", "33.2%", "50%", "67%", "83.4%", "100%"]

function App() {
  const [fase, setFase] = useState(0);

  return (
    <div className='page-container'>
      <BarraProgreso width={barraProgresoPorcentaje[fase]}/>
      <button onClick={() => setFase(fase + 1)}>agregar</button>
    </div>
  )
}

export default App
