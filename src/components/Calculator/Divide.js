

const Divide = (props) => {

    const divideHander = () => {
        props.onDivision(props.num1*1 / props.num2*1);
    }

    return(
        <button onClick={divideHander} > Divide </button> 
    );
}

export default Divide; 




