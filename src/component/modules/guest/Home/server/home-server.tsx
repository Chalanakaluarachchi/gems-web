import React from 'react'

import Footer from '../../footer/footer'
import 'tailwindcss/tailwind.css'
import Header from '../../header/header'
import CategorySlider from '../client/CategorySlider'
import AllProducts from '../client/All-Product'
import Hero from '../client/hero'
export default function HomeServer() {
  return (
   <div>
<Header />
<Hero />  
<CategorySlider />
<AllProducts />
<Footer />
</div>
)}