import { useState } from "react";
import "./style.css"
import "../../reset.css"
import Finances from "../Finances";
import Form from "../Form";
import TotalMoney from "../TotalMoney";



const DashBoard = ({changeDash}) => {
    return(
        <>
            <header className="header-dash">
                <nav>
                    <ul>
                        <li>
                            <p className="title-p">Nu <span className="title-span">Kenzie</span></p>
                        </li>
                        <li>
                            <button className="btn-nav" onClick={changeDash}>Inicio</button>
                        </li>
                    </ul>
                </nav>
            </header>
            <Form/>
            <TotalMoney/>
            <Finances/>
        </>
    )
}

export default DashBoard