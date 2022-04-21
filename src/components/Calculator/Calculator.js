
import {useState} from "react";

import Add from "./Add";
import Subtract from "./Subtract";
import Multiply from "./Multiply";
import Divide from "./Divide";

function Calculator(props) {
    
    let res;
    let num1;
    let num2;

    // 3 params to update
    const [result, setResult] = useState(props.result); 
    const [numOne, setNum1] = useState(num1);

    const [numTwo, setNum2] = useState(num2);


    const additionHandler = (addResult) => {
        res = addResult;
        console.log("res: ", res, "\naddResult: ", addResult);
        setResult(`Add clicked, result: `+ res);
    }

    const subtractionHandler = (subtractResult) => {
        console.log("Inside subtraction")
        console.log("subtractResult: ", subtractResult);
        setResult(`Subtract clicked, result: `+ subtractResult);
    }

    const multiplicationHanlder = (multiplyResult) => {
        console.log("Inside multiplicationHanlder")
        console.log("multiplyResult: ", multiplyResult);
        setResult(`Multily clicked, result: `+ multiplyResult);
    }

    const divisionHandler = (divideResult) => {
        console.log("Inside divisionHandler")
        console.log("divideResult: ", divideResult);
        setResult(`Divide clicked, result: `+ divideResult);
    }

    const num1InputHandler = (event) => {
        // num1 = event.target.value;
        // console.log(num1);
        console.log(event.target.value);
        setNum1(event.target.value);
    }

    const num2InputHandler = (event) => {
        setNum2(event.target.value);
    }

    return(
        <div>   
            <hr />
            <hr />
            <input type="text" onChange={num1InputHandler} placeholder="num1" />
            <input type="text" onChange={num2InputHandler} placeholder="num2" />
            <p> Num1 {numOne} </p> 
            <p> Num2 {numTwo} </p>
            <h1> {result} </h1>
            <div>   
                <Add num1={numOne} num2={numTwo} onAddition={additionHandler} ></Add>    
                <Subtract num1={numOne} num2={numTwo} onSubtraction={subtractionHandler} ></Subtract>
                <Multiply num1={numOne} num2={numTwo} onMultiplication={multiplicationHanlder} ></Multiply>
                <Divide num1={numOne} num2={numTwo} onDivision={divisionHandler} ></Divide>
            </div>
        </div>
    );
}

export default Calculator;


































