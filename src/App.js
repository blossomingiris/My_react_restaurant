import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Events,
  Menu,
} from './container'
import { Navbar } from './components'
import React from 'react'
import 'animate.css/animate.min.css'
import './App.css'

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Menu />
    <Chef />
    <Intro />
    <Events />
    <Gallery />
    {/* <FindUs /> */}
    <Footer />
  </div>
)

export default App
