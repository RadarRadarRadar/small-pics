
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Welcome from './pages/Welcome'
import About from './pages/About'
import ImageCompressorUpload from './pages/ImageCompressorUpload';
import RandomPicPage from './pages/RandomPicPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route
            exact path='/'
            render={() => (
              <Welcome />
            )}
          />
          <Route
            path="/about"
            render={() => (
              <About />
            )}
          />
          <Route
            path="/imgcomupload"
            render={() => (
              <ImageCompressorUpload />
            )}
          />
          <Route
            path="/randompic"
            render={() => (
              <RandomPicPage />
            )}
          />
        </Switch>
      </header>
    </div>
  );
}

export default App;
