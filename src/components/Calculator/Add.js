

const Add = (props) => {
    
    // const addHandler = () => {
    //     props.result = props.num1 + props.num2;
    //     props.setResult(`After addition, result: `+ props.res);
    // }

    const addHandler = () => {
        let res = props.num1*1 + props.num2*1;
        props.onAddition(res);
    }

    return(
        <button onClick={addHandler} > Add </button>
    );
}

export default Add; 

























