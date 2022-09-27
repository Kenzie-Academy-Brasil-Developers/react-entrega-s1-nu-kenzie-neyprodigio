import "./reset.css";
import "./App.css";
import imagem from "./assets/illustration.svg";
import { useEffect, useState } from "react";
import DashBoard from "./componentes/Dashboard";

const App = () => {
  const [list, setList] = useState([]);
  const [newArray, setNewArray] = useState([...list]);
  const [descrip, setDescrip] = useState("");
  const [value, setValue] = useState("");
  const [option, setOption] = useState("Entrada");
  const [isDashboard, setIsDashboard] = useState(false);

  const changeDash = () => {
    setIsDashboard(!isDashboard);
  };

  useEffect(() =>{
    setNewArray(list);
    console.log(newArray);
  }, [list]);
  
  const remove = (click) => {
    const filter = list.filter((e,index) => {
      console.log(index, "index");
      console.log(Number(click), "click");
      return index !== Number(click)
    })
    setList(filter);
    console.log(filter, "opa");
    //console.log(newArray);
  };

  return (
    <>
      {isDashboard ? (
        <div className="App">
          <main className="main">
            <section className="info-home">
              <p className="title-p">
                Nu <span className="title-span1">Kenzie</span>
              </p>
              <h1 className="text-center">
                Centralize o controle das suas finanças
              </h1>
              <p className="text-footer">de forma rápida e segura</p>
              <button
                onClick={changeDash}
                className="btn-iniciar"
                type="submit"
              >
                Iniciar
              </button>
            </section>
            <section className="img-section">
              <img className="img-rigth" src={imagem} alt="" />
            </section>
          </main>
        </div>
      ) : (
        <DashBoard
          remove={remove}
          newArray={newArray}
          setNewArray={setNewArray}
          list={list}
          setList={setList}
          descrip={descrip}
          setDescrip={setDescrip}
          value={value}
          setValue={setValue}
          option={option}
          setOption={setOption}
          changeDash={changeDash}
        />
      )}
    </>
  );
};

export default App;
