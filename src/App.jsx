import React from 'react'
import './App.css'
import { useState } from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Product from './components/product/Product'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Hero />
        <Product />
        <Footer />
    </>
  )
}

export default App
