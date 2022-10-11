import { useState } from 'react';
import './App.css';
import CardDisplay from './Components/CardDisplay/CardDisplay';
import CardInput from './Components/CardInput/CardInput';
import Complite from './Components/Complite/Complite';
function App() {
  const [user, setUser] = useState()
  const [comp, setComp] = useState(false)
  return (
    <div className="App">
        <CardDisplay getInput={user}/>
        {
          !comp
          ?
          <CardInput setInput={setUser} complite={setComp}/>
          :
          <Complite reset={setComp}/>
        }        
    </div>
  );
}

export default App;
