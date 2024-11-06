import { useState } from 'react'

import './App.css'

import BarraProgreso from './components/BarraProgreso';
import Portada from './components/Portada';

const barraProgresoPorcentaje: string[] = ["16.6%", "33.2%", "50%", "67%", "83.4%", "100%"]

function App() {
  const [fase, setFase] = useState(0);

  return (
    <>
      <BarraProgreso width={barraProgresoPorcentaje[fase]}/>

      <div className='contenedor_pagina'>
        <Portada fase={fase}/>
        <p>hola</p>

      </div>
    </>
    
  )
}

export default App
