import './App.css';
// import Cart from "./components/Cart";
// import ColoredDiv from "./components/ColoredDiv/ColoredDiv";
import Calculator from "./components/Calculator/Calculator"

function App() {
  
  // for cart
  // let title = "Title will be here";
  // let amount = 0;


  // for ColoredDiv
  // const colorDivData = [
  //   {
  //     text: "Heading",
  //     color: "white"
  //   },
  //   {
  //     text: "Green",
  //     color: "green"
  //   },
  //   {
  //     text: "blue",
  //     color: "blue"
  //   },
  //   {
  //     text: "red",
  //     color: "red"
  //   },
  //   {
  //     text: "purple",
  //     color: "purple"
  //   }
  // ]
  
  //For calculator
  let num1 = 10, num2 = 5, result = "Result";

  return (
    <div>
      {/* <ColoredDiv colorDivData={colorDivData}></ColoredDiv> */}
      <hr />
      {/* <Cart title={title} amount={amount}></Cart> */}
      <Calculator num1={num1} num2={num2} result={result} />
    </div>
  );
}

export default App;
