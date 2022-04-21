

const Multiply = (props) => {

    const multiplyHandler = () => {
        let res = (props.num1*1 )* (props.num2*1);
        props.onMultiplication(res);
    }

    return(
        <button onClick={multiplyHandler} > Multiply </button>
    );
}

export default Multiply; 




 