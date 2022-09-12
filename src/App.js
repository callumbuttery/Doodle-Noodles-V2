import Welcome from './components/welcome.js'
import Nav2 from './components/Nav2.js'
import Slide from './components/slideshow'
import Footer from './components/Footer.js'

import Home from './pages/Home';
import FAQ from './pages/FAQ';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Nav2/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/faq"><FAQ/></Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
