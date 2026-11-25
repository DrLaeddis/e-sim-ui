import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layouts from './layouts/Layouts'
import HomePage from './pages/Home'
import DetailPage from './pages/Detail'
import OrderDetailPage from './pages/OrderDetail'
import PaymentMethodPage from './pages/PaymentMethod'
import InvoicePage from './pages/Invoice'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layouts />}>
          <Route index element={<HomePage />} />
          <Route path="detail-package/:id" element={<DetailPage />} />
          <Route path="detail-pemesanan" element={<OrderDetailPage />} />
          <Route path="metode-pembayaran" element={<PaymentMethodPage />} />
          <Route path="invoice" element={<InvoicePage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
