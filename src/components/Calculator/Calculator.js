
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

    const addHandler = () => {
        res = num1 + num2;
        console.log(res);
        setResult(`After addition, result: `+ res);
    }

    const subHandler = () => {
        res = num1 - num2;
        setResult(`After subtraction, result: `+ res);
    }

    const divideHandler = () => {
        res = num1 / num2;
        setResult(`After division, result: `+ res);
    }

    const multiplyHandler = () => {
        res = num1 * num2;
        setResult(`After multiplication, result: `+ res);
    }

    return(
        <div>   
            <hr />
            <hr />
            <p> {props.num1} </p>
            <p> {props.num2} </p>
            <h1> {result} </h1>
            <div>
                <button onClick={addHandler} > Add </button>
                <button onClick={subHandler} > Subtract </button>
                <button onClick={divideHandler} > Divide </button>
                <button onClick={multiplyHandler} > Multiply </button>
            </div>
        </div>
    );
}

export default Calculator;


































