import { useState } from 'react';
import { evaluate } from 'mathjs';
import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';

function Calculatrice() {
  const [value, setValue] = useState('');

  const calculer = () => {
    try {
      setValue(String(evaluate(value)));
    } catch {
      setValue('Erreur');
    }
  };

  return (
    <div>
      <div className="title">
        <h1>CALCULATRICE</h1>
      </div>
      <br />

      <div className="container">
        <div className="calculatrice">
          <form onSubmit={e => e.preventDefault()}>
            <div className="display">
              <input type="text" value={value} readOnly />
            </div>

            <div>
              <input type="button" value="AC" onClick={() => setValue('')} />
              <input type="button" value="DE" onClick={() => setValue(value.slice(0, -1))} />
              <input type="button" value="." onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="/" onClick={e => setValue(value + e.target.value)} />
            </div>

            <div>
              <input type="button" value="7" onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="8" onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="9" onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="*" onClick={e => setValue(value + e.target.value)} />
            </div>

            <div>
              <input type="button" value="4" onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="5" onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="6" onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="-" onClick={e => setValue(value + e.target.value)} />
            </div>

            <div>
              <input type="button" value="1" onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="2" onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="3" onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="+" onClick={e => setValue(value + e.target.value)} />
            </div>

            <div>
              <input type="button" value="0" onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="00" onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="=" onClick={calculer} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Calculatrice;
