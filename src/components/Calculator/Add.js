

const Add = (props) => {
    
    const addHandler = () => {
        props.result = props.num1 + props.num2;
        props.setResult(`After addition, result: `+ props.res);
    }

    return(
        <button onClick={addHandler} > Add </button>
    );
}

export default Add; 

























