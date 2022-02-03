import { useState } from 'react';
import './App.css';



function App() {
  const [paino, setPaino] = useState(0);
  const [pullot, setPullot] = useState(0);
  const [aika, setAika] = useState(0);
  const [sukupuoli, setSukupuoli] = useState('mies');
  const [tulos, setTulos] = useState(0);


  function lasketaan(e) {
    e.preventDefault();
    let pitoisuus = 0;
    let litrat = pullot * 0.33;
    let grammat = litrat * 8 * 4.5;
    let kulutus = paino / 10;
    let jaljella = grammat - (kulutus * aika);

    if (sukupuoli === 'mies') {
      pitoisuus = jaljella / (paino * 0.7);
    }
    else {
      pitoisuus = jaljella / (paino * 0.6);
    } 
   
    setTulos(pitoisuus);
    
  }

  return (

  <form>
    <h1>Calculating alcohol blood level</h1>
        <div>
          <p>Weight<input type="number" value={paino} onChange={e => setPaino(e.target.value)} ></input></p>
         <p>Bottles<input type="number" value={pullot} onChange={e => setPullot(e.target.value)} ></input></p>
            <p>Time<input type="number" value={aika} onChange={e => setAika(e.target.value)} ></input></p>
        </div>
        <div>
          <label>Gender</label>
          <label><input type="radio" name="sukupuoli" value="mies" defaultChecked onChange={e => setSukupuoli(e.target.value)} />Male</label>
          <label><input type="radio" name="sukupuoli" value="nainen" onChange={e => setSukupuoli(e.target.value)} />Female</label>
        </div>
        <div>
          <label><h3>Results</h3></label>
          <output>{tulos.toFixed(2)}</output>
        </div>
        <div>
          <button type='button' onClick={lasketaan}>Calculate</button>
        </div>
        <div>
          <footer>
          <div>
            Do not drunk and drive
          </div>
          </footer>
        </div>
      
   </form>
  );
}

export default App;
