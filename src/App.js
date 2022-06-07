import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {originals, action} from './urls';




function App() {
  return (
    <div className="App">

      <h2>NFX...TrialBar</h2>

      <NavBar/>
      <Banner/>
      <RowPost url={originals}  title='originals'/>
      <RowPost url={action}    title='Actions' isSmall/>
      
    </div>
  );
}

export default App;
