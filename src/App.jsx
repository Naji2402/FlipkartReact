import Final from "./components/FinalComponent/Final"
import Test from "./components/ProductPageComponent/test"
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Final />} />
            <Route path='test' element={<Test />} />
        </Routes>
    </>
  )
}

export default App

