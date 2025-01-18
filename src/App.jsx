import { Header } from './components/Header'
import { Total } from './components/Total'
import { Finances } from './components/Finances'
import { useState } from 'react'

function App() {
  const [deposito, setDeposito] = useState([]); 
  return (
    <>
     <Header/>
     <main>
      <Finances deposito={deposito} setDeposito={setDeposito}/>
      <Total deposito={deposito}/>
     </main>
    </>

    
  )
}

export default App


