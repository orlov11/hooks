import React from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (Components) => (props) => {
    const isAuth = localStorage.getItem("token");
    const handleLogIn = () => {
        localStorage.setItem("token", "true");
        location.reload();
    };
    const handleLogOut = () => {
        localStorage.removeItem("token");
        location.reload();
    };
    return (
        <CardWrapper>
            <Components
                onLogIn={handleLogIn}
                onLogOut={handleLogOut}
                isAuth={isAuth}
            />
        </CardWrapper>
    );
};

export default withFunctions;
