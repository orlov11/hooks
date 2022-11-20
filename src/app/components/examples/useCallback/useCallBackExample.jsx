import React, { useState, useRef, useEffect, useCallback } from "react";

import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const WithOutCallback = useRef(0);
    const WithCallback = useRef(0);

    const handleChane = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    // widthout callback
    const validateWithOutCallback = (data) => {
        console.log(data);
    };
    useEffect(() => {
        WithOutCallback.current++;
    }, [validateWithOutCallback]);

    // widthout callback
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        WithCallback.current++;
    }, [validateWithCallback]);

    useEffect(() => {
        validateWithOutCallback(data);
        validateWithCallback(data);
    }, [data]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>WithOutCallback {WithOutCallback.current}</p>
            <p>WithCallback {WithCallback.current}</p>

            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                onChange={handleChane}
                value={data.email || " "}
                name="email"
                autoComplete="off"
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
