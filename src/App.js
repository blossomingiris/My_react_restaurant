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
} from './pages'
import { Navbar } from './components'
import { ScrollToTop } from './components'
import 'animate.css/animate.min.css'

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
