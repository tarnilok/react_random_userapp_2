import './design/App.css';
import cw from "./assets/cw.svg";
import design from "./assets/design.svg"
import PersonInfo from './components/personInfo';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img src= {cw} alt="clarusway" className="cw"/>
      </nav>
      <PersonInfo/>
      <div className="foot">
        <img src = {design} alt="design" className="design"/>
        <p className="after">design</p>

      </div>
    </div>
  );
}

export default App;
