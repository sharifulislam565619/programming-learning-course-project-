import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { createContext } from 'react';


export const MyContext = createContext('sharif')

function App() {

  const name = "Shariful islam"
  return (
    <MyContext.Provider value={name}>
      <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    </MyContext.Provider>
  );
}

export default App;
