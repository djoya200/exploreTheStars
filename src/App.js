import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AstronomyPicOfTheDay from './components/AstronomyPicOfTheDay';
import About from './components/About';
import Nav from './components/Nav'
import NASAImgAndVideo from './components/NASAImgAndVideo';
import MarsRoverPhotos from './components/MarsRoverPhotos';
import Title from './components/Title';

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Nav/>

        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/astronomyPickOfTheDay" component={AstronomyPicOfTheDay} />
          <Route path="/nasaImgAndVideo" component={NASAImgAndVideo} />
          <Route path="/marsRoverPhotos" component={MarsRoverPhotos} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
