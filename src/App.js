import React from 'react'
import 'animate.css/animate.min.css'

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  PrivateDining,
  Menu,
} from './container'
import { Navbar } from './components'
import './App.css'

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Menu />
    <Chef />
    <Intro />
    <PrivateDining />
    {/* <Gallery />
    <FindUs />
    <Footer /> */}
  </div>
)

export default App
