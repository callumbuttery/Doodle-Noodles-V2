import Welcome from './components/welcome.js'
import Team from './components/Team.js'
import Nav from './components/nav.js'
import About from './components/About.js'
import FAQ from './components/FAQ.js'

function App() {

  return (
    <div>
      <Nav></Nav>
      <Welcome id='Welcome'></Welcome>
      <About></About>
      <Team id='Team'></Team>
      <FAQ id='about'></FAQ>
    </div>
  );
}

export default App;
