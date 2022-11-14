import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const blockRef = useRef();
    let num = 0;
    const handleChane = () => {
        num++;
        if (num % 2 === 0) {
            blockRef.current.textContent = "Блок";
            blockRef.current.style.height = "40px";
            blockRef.current.style.width = "60px";
        } else {
            blockRef.current.textContent = "text";
            blockRef.current.style.height = "150px";
            blockRef.current.style.width = "80px";
        }
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                ref={blockRef}
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <button onClick={handleChane} className="btn btn-dark m-2">
                Toggle block
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
