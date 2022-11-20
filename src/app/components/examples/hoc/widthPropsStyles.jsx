import React from "react";
import CardWrapper from "../../common/Card";

const widthPropsStyles = (Component) => (props) => {
    return (
        <CardWrapper>
            <Component {...props} name="Some name" />
        </CardWrapper>
    );
};

export default widthPropsStyles;
