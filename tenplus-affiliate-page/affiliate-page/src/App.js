import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import HomeContent from './Components/HomeContent';
import UserAccount from './Components/UserAccount';
import Payments from './Components/Payments';
import Products from './Components/Products';
import MainHome from './Components/MainHome';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Test from './Components/Test';
import Modal from './Components/Modal';
import Withdraw from './Components/Withdraw';
import EditProfile from './Components/EditProfile';


function App() {
  return (
    <Router>
      <div>      
        <NavBar />     
        <Switch>
          <Route exact path="/"  component={ MainHome } />
          <Route path="/user" component={ Signup } />
          <Route path="/product" component={ Products } />
          <Route path="/login" component={ Login } />
          <Route path="/signup" component={ Signup } />
          <Route path="/payment" component={ Payments } />
          <Route path="/homecontent" component={ HomeContent } />
          <Route path="/account" component={ UserAccount } />
          <Route path="/test" component={ Test } />
          <Route path="/modal" component={ Modal } />
          <Route path="/withdrawal" component={ Withdraw } />
          <Route path="/editprofile" component={ EditProfile } />
        </Switch>     
      </div> 
      <Footer />     
    </Router>
  );
}

export default App;
