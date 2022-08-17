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
import { ScrollToTop } from './components'
import 'animate.css/animate.min.css'
import './App.css'

const App = () => (
  <>
    <div className='main_wrapper'>
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Intro />
      <Events />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
    <ScrollToTop />
  </>
)

export default App
