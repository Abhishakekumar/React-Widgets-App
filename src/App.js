import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Todo from './Components/Todo';
import './App.css';

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/todo" element={<Todo/>}></Route>
        </Routes>
    </Router>
    
  );
}

export default App;
