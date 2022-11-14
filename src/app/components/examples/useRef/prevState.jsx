import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";

const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("false");

    const toggleState = () => {
        setOtherState((prevState) =>
            prevState === "false" ? "ture" : "false"
        );
    };

    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>prev state: {prevState.current}</p>
            <p>current state: {otherState}</p>

            <button className="btn btn-dark" onClick={toggleState}>
                Toggle State
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
