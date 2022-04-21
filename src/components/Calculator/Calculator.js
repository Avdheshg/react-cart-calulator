
import {useState} from "react";

import Add from "./Add";
import Subtract from "./Subtract";
import Multiply from "./Multiply";
import Divide from "./Divide";

function Calculator(props) {

    // 3 params to update
    const [result, setResult] = useState(props.result); 

    let res;
    let num1 = props.num1;
    let num2 = props.num2;

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

    return(
        <div>   
            <hr />
            <hr />
            <p> {props.num1} </p>
            <p> {props.num2} </p>
            <h1> {result} </h1>
            <div>   
                <Add num1={num1} num2={num2} onAddition={additionHandler} ></Add>    
                <Subtract num1={num1} num2={num2} onSubtraction={subtractionHandler} ></Subtract>
                <Multiply num1={num1} num2={num2} onMultiplication={multiplicationHanlder} ></Multiply>
                <Divide num1={num1} num2={num2} onDivision={divisionHandler} ></Divide>
            </div>
        </div>
    );
}

export default Calculator;


































