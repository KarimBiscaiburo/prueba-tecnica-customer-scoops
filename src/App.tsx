import { useState } from 'react'

import './App.css'

import BarraProgreso from './components/miniComponents/BarraProgreso';
import Portada from './components/Portada';
import Secciones from './components/Secciones';

const barraProgresoPorcentaje: string[] = ["16.6%", "33.2%", "50%", "67%", "83.4%", "100%"]

function App() {
  const [fase, setFase] = useState(0);

  return (
    <>
      <BarraProgreso width={barraProgresoPorcentaje[fase]}/>

      <div className='contenedor_pagina'>
        <Portada fase={fase}/>
        <Secciones />
      </div>
    </>
    
  )
}

export default App
