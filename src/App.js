import Welcome from './components/welcome.js'
import Nav2 from './components/Nav2.js'
import Slide from './components/slideshow'
import Footer from './components/Footer.js'

function App() {
  return (
    <div>
      <Nav2></Nav2>
      <div style={{ backgroundColor: '#FF322C'}}>
        <Slide></Slide>
      </div>
      <Welcome id='Welcome'></Welcome>
      <Footer></Footer>
    </div>

  );
}

export default App;
