
import {useState} from "react";

const Cart = (props) => {   

    let amount = props.amount;
    console.log(amount);
    const [title, setTitle] = useState(props.title);


    const subHandler = () => {
        console.log({title});
        amount = amount-1;
        setTitle(`Subtract -1, new Amount=`+ amount);
    } 

    const addHandler = () => {
        console.log(title);
        amount = amount + 1;
        setTitle(`Add +1, new Amount= `+ amount);
    }

    return(
        <div>
            <h1> {title} </h1>
            <button onClick={subHandler}>Subbtract</button>
            <button onClick={addHandler}>Add</button>
        </div>
    );
}

export default Cart;







































