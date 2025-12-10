import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import Signup from './components/signup/Signup.jsx'
import AboutPage from './components/about/AboutPage.jsx'
import ProductPage from './components/products/ProductPage.jsx'
import PricingPage from './components/pricing/PricingPage.jsx'
import SupportPage from './components/support/SupportPage.jsx'
import NotFound from './components/NotFound.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route  path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/products" element={<ProductPage/>} />
      <Route path="/pricing" element={<PricingPage/>} />
      <Route path="/support" element={<SupportPage/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default App
