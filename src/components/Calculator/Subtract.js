

const Subtract = (props) => {

    const subHandler = () => {
        let res = (props.num1*1) - (props.num2*1);
        props.onSubtraction(res);
    }

    return(
        <button onClick={subHandler} > Subtract </button>
    );
}

export default Subtract; 




