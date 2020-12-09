
import './App.css';
import Footer from './components/Footer/Footer';
//import NavBar from './components/NavBar/NavBar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Contacts from './components/Contacts/Contacts';
import AboutUs from './components/AboutUs/AboutUs';
import Process from './components/Process';
import Testimonial from './components/Testimonials/Testimonial';
import Employees from './components/Employees/Employees';
import Projects from './components/Projects/Projects';
import Home from './components/Home/Home';
import Tnav from './components/Tnav/Tnav';
import Services from './components/Services/Services';

function App() {
  return (
    <Router className="App">
      {/*<NavBar />*/}
      <Tnav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contacts' exact component={Contacts} />
        <Route path='/aboutus' exact component={AboutUs} />
        <Route path='/services' exact component={Services} />
        <Route path='/process' exact component={Process} />
        <Route path='/testimonials' exact component={Testimonial} />
        <Route path='/employees' exact component={Employees} />
        <Route path='/projects' exact component={Projects} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
