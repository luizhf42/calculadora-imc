import { useState } from "react";

export default function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [imc, setImc] = useState("");
  const [message, setMessage] = useState("");

  const calculateImc = () => {
    const heightInMeters = height / 100;
    const imc = weight / heightInMeters ** 2;

    setImc(`Seu IMC é ${imc.toFixed(2)}.`);
    if (imc < 18.5) setMessage("Você está abaixo do peso!");
    else if (imc >= 18.5 && imc < 25) setMessage("Você está no peso ideal!");
    else if (imc >= 25 && imc < 30) setMessage("Você possui obesidade leve!");
    else if (imc >= 30 && imc < 40) setMessage("Você possui obesidade moderada! Cuide-se!");
    else if (imc > 40) setMessage("Você possui obesidade mórbida! Procure um profissional!");
  };

  return (
    <main className="app">
      <h1 className="text">Calculadora IMC</h1>
      <p className="text">Calcule seu IMC aqui!</p>

      <form onSubmit={(event) => event.preventDefault()}>
        <input
          type="number"
          placeholder="Insira seu peso em kg (ex.: 80)"
          min="1"
          value={weight}
          onChange={(event) => {
            setWeight(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Insira sua altura em cm (ex.: 180)"
          min="1"
          value={height}
          onChange={(event) => {
            setHeight(event.target.value);
          }}
        />
        <button onClick={calculateImc}>Calcular</button>
      </form>

      <h2 className="text">
        {imc} {message}
      </h2>
    </main>
  );
}
