
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import InjuryHelp from './screens/InjuryHelp';


function App() {
  return (
    <div className="App">

      

      

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<InjuryHelp/>} />

          

        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;

