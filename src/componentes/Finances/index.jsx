import Card from "../Card";
import Loading from "../loanding";

import "../../reset.css";
import "./style.css";
import { useEffect, useState } from "react";


const Finances = ({ filter, setFilter,list, setList, newArray, setNewArray, remove }) => {
  const showAll    = [...list]
  const showLaunch = [...list].filter((e) => e.option === "Entrada")
  const showExit   = [...list].filter((e) => e.option === "Saida")
  const [entrada, setEntrada] = useState(showLaunch)

  
  const all = () =>{
    
  }


  return (
    <div className="div-finances">
      <header className="header-finances">
        <p className="title">Resumo financeiro</p>
        <button onClick={(e) =>{ all(e.target.id)}} className="btn-filtros">Todos</button>
        <button onClick={(e) =>{ }} className="btn-filtros">Entradas</button>
        <button className="btn-filtros">Dispesas</button>
      </header>
      {list.length > 0 ? (
        <Card
          remove={remove}
          newArray={newArray}
          setNewArray={setNewArray}
          filter={filter}
          setFilter={setFilter}
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
