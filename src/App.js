// import logo from './logo.svg';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';

function App() {
  return (
    <div >

      <Router>
        <Header></Header>

        <Switch>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/About">
            <About></About>
          </Route>
          <Route path="/Services">
            <Services></Services>
          </Route>
          <Route path="/Contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>

      </Router>


      <div>
        <Footer></Footer>
      </div>

    </div>

  );
}

export default App;
