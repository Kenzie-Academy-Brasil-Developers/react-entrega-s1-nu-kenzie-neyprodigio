import "../../reset.css";
import "./style.css";
import imgTrash from "../../assets/trash.png";
import { useEffect } from "react";

const Card = ({ list, setList, newArray, setNewArray, remove }) => {
  

  return (
    <>
      {newArray.map((item, index) => (
        <div key={index} className="card">
          <section className="info-card">
            <h3 className="descri-card">{item.descrip}</h3>
            <p className="type-card">{item.option}</p>
          </section>
          <section className="del-card">
            <span className="value-card">R${item.value}</span>
            <button className="btn-trash" id={index} onClick={(e) => {
                console.log(Number(e.target.id))
                remove(e.target.id)
            }}>
              <img className="img-trash" src={imgTrash} alt="" />
            </button>
          </section>
        </div>
      ))}
    </>
  );
};

export default Card;
