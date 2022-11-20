import React, { useState, useEffect, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const factorial = (n) => {
    return n ? n * factorial(n - 1) : 1;
};
const runFactorial = (n) => {
    console.log("run factorial");
    return factorial(n);
};

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);

    const color = otherState ? "warning" : "dark";
    useEffect(() => {
        console.log("render");
    });
    const fact = useMemo(() => runFactorial(value), [value]);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>result fact: {fact}</p>
                <button
                    className="btn btn-primary m-2"
                    onClick={() => setValue((prevState) => prevState + 10)}
                >
                    Incriment
                </button>
                <button
                    className="btn btn-primary m-2"
                    onClick={() => setValue((prevState) => prevState - 10)}
                >
                    Dicriment
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={"btn m-2 btn-" + color}
                    onClick={() => setOtherState((prevState) => !prevState)}
                >
                    Change color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
