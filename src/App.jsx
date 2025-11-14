import Final from "./components/FinalComponent/Final"
import PFinal from "./components/ProductPage/ProductPageFinal/ProductPageFinal"
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Final />} />
            <Route path='productPage' element={<PFinal />} />
        </Routes>
    </>
  )
}

export default App

