import { useState } from "react";
import "../../reset.css";
import "./style.css";
import Finances from "../Finances";
import Form from "../Form";
import TotalMoney from "../TotalMoney";

const DashBoard = ({
  remove,
  newArray,
  setNewArray,
  list,
  setList,
  changeDash,
  descrip,
  setDescrip,
  value,
  setValue,
  option,
  setOption,
}) => {
  return (
    <>
      <header className="header-dash">
        <nav>
          <ul>
            <li>
              <p className="title-p">
                Nu <span className="title-span">Kenzie</span>
              </p>
            </li>
            <li>
              <button className="btn-nav" onClick={changeDash}>
                Inicio
              </button>
            </li>
          </ul>
        </nav>
      </header>
      
      <main className="main-container">
      <section className="main-left">
        <Form
          list={list}
          setList={setList}
          descrip={descrip}
          setDescrip={setDescrip}
          value={value}
          setValue={setValue}
          option={option}
          setOption={setOption}
        />
        <TotalMoney list={list} />
      </section>
      
      <section className="main-rigth">
        <Finances
          remove={remove}
          newArray={newArray}
          setNewArray={setNewArray}
          list={list}
          setList={setList}
        />
      </section>
      </main>

      
    </>
  );
};

export default DashBoard;
