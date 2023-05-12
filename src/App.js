import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import Navbar from './Components/Navbar';
import MyCard from './Components/MyCard';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>hello</h1>
      <MyCard/>
      
    </div>
  );
}

export default App;
