import { Numero } from "./components/Numero";
import { useState } from "react";

function App() {
  const numNumeros = 5;
  const numerosInicials = Array.from(
    Array(numNumeros),
    (numero, index) => index + 1
  );
  const [numeros, setNumeros] = useState(numerosInicials);
  const sumar = () => {
    if (numeros[numNumeros - 1] < 20) {
      setNumeros(numeros.map((numero) => numero + 1));
    }
  };
  const restar = () => {
    if (numeros[0] > 0) {
      setNumeros(numeros.map((numero) => numero - 1));
    }
  };
  const [pantalla, setPantalla] = useState("");
  const apareixer = (e) => {
    setPantalla(e.target.value);
  };
  return (
    <div className="contenidor">
      <p>{pantalla}</p>
      <ul>
        <li onClick={restar}>{"<<"}</li>
        {numeros.map((numero) => (
          <Numero key={numero} numero={numero} onClick={apareixer} />
        ))}
        <li onClick={sumar}>{">>"}</li>
      </ul>
    </div>
  );
}

export default App;
