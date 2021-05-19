import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AstronomyPicOfTheDay from './components/AstronomyPicOfTheDay';
import About from './components/About';
import Nav from './components/Nav'
import NASAImgAndVideo from './components/NASAImgAndVideo';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>

        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/astronomyPickOfTheDay" component={AstronomyPicOfTheDay} />
          <Route path="/nasaImgAndVideo" component={NASAImgAndVideo} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
