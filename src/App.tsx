import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layouts from './layouts/Layouts'
import HomePage from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layouts />}>
          <Route index element={<HomePage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
