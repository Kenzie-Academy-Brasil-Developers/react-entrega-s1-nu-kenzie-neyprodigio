import Card from "../Card";
import Loading from "../loanding";

import "../../reset.css";
import "./style.css";
import { useEffect } from "react";

const Finances = ({ list, setList, newArray, setNewArray, remove }) => {
  return (
    <div className="div-finances">
      <header className="header-finances">
        <p className="title">Resumo financeiro</p>
        <button className="btn-filtros">Todos</button>
        <button className="btn-filtros">Entradas</button>
        <button className="btn-filtros">Dispesas</button>
      </header>
      {list.length > 0 ? (
        <Card
          remove={remove}
          newArray={newArray}
          setNewArray={setNewArray}
          list={list}
          setList={setList}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Finances;
