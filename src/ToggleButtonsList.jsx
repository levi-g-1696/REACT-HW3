import React from "react";
import ToggleButton from "./ToggleButton";

export default function ToggleButtonsList(props) {
    let arrBtns = [];

    for (let index = 0; index < props.count; index++) {
        let btnElement = <><ToggleButton Key={index} toggleText="OFF" /><hr /></>;
        arrBtns.push(btnElement);

    }



    return (


        <>
            {arrBtns}
        </>

    );


}