import Welcome from './components/welcome.js'
import Team from './components/Team.js'
import Nav2 from './components/Nav2.js'
import About from './components/About.js'
import FAQ from './components/FAQ.js'
import Rune from './components/Rune.js'
import RarityGuide from './components/RarityGuide.js'
import Ramen from './components/Ramen.js'
import OneTree from './components/OneTree.js'

function App() {

  return (
    <div>
      <Nav2></Nav2>
      <Welcome id='Welcome'></Welcome>
      <About></About>
      <Team id='Team'></Team>
      <FAQ id='about'></FAQ>
      <Ramen></Ramen>
      <OneTree></OneTree>
      <Rune></Rune>
      <RarityGuide></RarityGuide>
    </div>
  );
}

export default App;
