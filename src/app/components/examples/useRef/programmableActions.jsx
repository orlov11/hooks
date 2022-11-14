import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        console.log("d");
        inputRef.current.focus();
        inputRef.current.style.height = "";
        inputRef.current.style.width = "";
        inputRef.current.value = "";
    };
    const handleChangeSize = () => {
        inputRef.current.style.height = "150px";
        inputRef.current.style.width = "80px";
        inputRef.current.value = "text";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control"
                id="email"
            />
            <button className="btn btn-dark m-2" onClick={handleClick}>
                Focus input and clear
            </button>
            <button className="btn btn-warning m-2" onClick={handleChangeSize}>
                Change size
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
