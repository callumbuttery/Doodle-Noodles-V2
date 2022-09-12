import Welcome from '../components/welcome.js'
import Slide from '../components/slideshow'

function Home() {
    return (
      <div>
        <div style={{ backgroundColor: '#FF322C'}}>
          <Slide></Slide>
        </div>
        <Welcome id='Welcome'></Welcome>
      </div>
  
    );
  }
  
  export default Home;