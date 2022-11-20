import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogIn, onLogOut, isAuth }) => {
    return (
        <>
            {isAuth ? (
                <button className="btn btn-dark m-2" onClick={onLogOut}>
                    Выйти из системы
                </button>
            ) : (
                <button className="btn btn-dark m-2" onClick={onLogIn}>
                    Войти в систему
                </button>
            )}
        </>
    );
};

SimpleComponent.propTypes = {
    onLogIn: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};
export default SimpleComponent;
