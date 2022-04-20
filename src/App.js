import './App.css';
import Cart from "./components/Cart";
import Calculator from "./components/Calculator/Calculator"

function App() {
  
  // for cart
  let title = "Title will be here";
  let amount = 0;

  //For calculator
  let num1 = 10, num2 = 5, result = "Result";

  return (
    <div>
      <Cart title={title} amount={amount}></Cart>
      <Calculator num1={num1} num2={num2} result={result} />
    </div>
  );
}

export default App;
