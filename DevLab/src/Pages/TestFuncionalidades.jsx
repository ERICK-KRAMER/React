import React, { useState } from "react";
import Modal from "../Components/modal/Modal";

function TestFuncionalidades() {

    const [openModal, steOpenModal] = useState(false);

    function handleClick() {
        steOpenModal(!openModal)
    };
    
    return(
        <div>
            <button onClick={handleClick}>Login</button>
            <div>{openModal && <Modal />}</div>
        </div>
    );
};

export default TestFuncionalidades;