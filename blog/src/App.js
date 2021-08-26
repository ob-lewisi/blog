import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './Containers/HomePage'

function App() {
  return (
<Router>
  <Switch prefix="/blog">
  <Route path="/home" component={HomePage}/>
  </Switch>
</Router>
  );
}

export default App;
