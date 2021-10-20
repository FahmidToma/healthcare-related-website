import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Header from './Header/header';
import Home from './Home/home';
import Services from './Services/services';
import About from './AboutUs/about';
import Footer from './Footer/footer';
import Contact from './Contact/contact';
import Notfound from './404/notfound';
import AuthProvider from './Context/authprovider';
import Details from './Details/details';
import Login from './login/login';
import PrivateRoute from './login/Private-route/private-route';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
      <Route path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/home'>
          <Home></Home>
        </Route>
        <Route exact path='/services'>
          <Services></Services>
        </Route>
        <Route exact  path='/aboutus'>
          <About></About>
        </Route>
        <Route exact path='/contact'>
          <Contact></Contact>
        </Route>
        <PrivateRoute path='/details/:serviceId'>
          <Details></Details>
        </PrivateRoute>
        <Route exact path='/login'>
          <Login></Login>
        </Route>
        <Route exact path='*'>
          <Notfound></Notfound>
        </Route>
      </Switch>
      <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
