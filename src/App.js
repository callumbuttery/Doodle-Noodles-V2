import Welcome from './components/welcome.js'
import Team from './components/Team.js'
import Nav from './components/nav.js'
import About from './components/About.js'

function App() {

  return (
    <div>
      <Nav></Nav>
      <Welcome id='Welcome'></Welcome>
      <About></About>
      <Team id='Team'></Team>
    </div>
  );
}

export default App;
