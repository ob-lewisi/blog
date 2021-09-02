import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './Containers/HomePage'
import BlogPost from './Containers/BlogPost'


function App() {
  return (
<Router>
  <Switch prefix="/blog">
  <Route path="/home" component={HomePage}/>
  <Route path="/post/:id" component={BlogPost}/>

  </Switch>
</Router>
  );
}

export default App;
