
import {useState} from "react";

import GreenColor from "./GreenColor";

const ColoredDiv = (props) => {

    const [text, setText] = useState(props.colorDivData[0].text);
    const [bgColor, setBgColor] = useState(props.bgColor);
    // let bgColor;

    const greenHandler = () => {
        setText(props.colorDivData[1].text);
        setBgColor(props.colorDivData[1].color);
    }

    const blueHandler = () => {
        setText(props.colorDivData[2].text);
        setBgColor(props.colorDivData[2].color);
    }

    const redHandler = () => {
        setText(props.colorDivData[3].text);
        setBgColor(props.colorDivData[3].color);
    }

    const purpleHandler = () => {
        setText(props.colorDivData[4].text);
        setBgColor(props.colorDivData[4].color);
    }

    return(
        <div>

            <h1 style={{backgroundColor: bgColor}} > {text} </h1>
            <GreenColor setText={setText}></GreenColor>
            <button onClick={greenHandler} >Green</button>
            <button onClick={blueHandler} >Blue</button>
            <button onClick={redHandler} >Red</button>
            <button onClick={purpleHandler} >Purple</button>
        </div>
    );
}

export default ColoredDiv;


































