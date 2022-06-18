
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Store from './components/Store';

import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Info from './components/Info';
import Work from './components/Work';
import Sliderr from './components/Sliderr';
import Footer from './components/Footer';
import Home from './components/Home';
import Signin from './components/Signin';
import Register from './components/Register';
import Registration1 from './components/Registration1';




function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" exact component={Signin} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/register" component={Register} />
      <Route path="/register2" component={Registration1} />
        </Switch>
      
   </Router>

  

    </div>
  );
}




export default App;
