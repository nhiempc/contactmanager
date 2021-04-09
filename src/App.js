import './App.css';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome.min.js';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import {Provider} from './context';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding = "Contact Manager"/>
          <div className = "container mt-2">
            <Switch>
              <Route exact path = "/" component = {Contacts}/>
              <Route exact path = "/about" component = {About}/>
              <Route exact path = "/contact/add" component = {AddContact}/>
              <Route exact path = "/contact/edit/:id" component = {EditContact}/>
              <Route exact path = "/test/:id" component = {Test}/>
              <Route component = {NotFound}/>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
