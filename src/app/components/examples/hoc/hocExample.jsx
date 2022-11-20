import React from "react";
import Component from "./someComponent";

import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import widthLogin from "./withLogin";
import widthPropsStyles from "./widthPropsStyles";
const HOCExample = () => {
    const ComponentWidthAuth = widthLogin(Component);
    const ComponentWidthPropsStyyles = widthPropsStyles(Component);
    const CopmonentComposition = widthPropsStyles(ComponentWidthAuth);
    return (
        <>
            <CardWrapper>
                <SmallTitle>1. Обычный компонент</SmallTitle>
                <Divider />
                <Component />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>2. Функциональный HOC</SmallTitle>
                <Divider />
                <ComponentWidthAuth />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>3. HOC With Styles and Props</SmallTitle>
                <Divider />
                <ComponentWidthPropsStyyles />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>4. Composed HOC</SmallTitle>
                <CopmonentComposition />
            </CardWrapper>
        </>
    );
};

export default HOCExample;
