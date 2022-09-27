
import DashBoard from "../Dashboard"
import { useState } from "react"
import "../../reset.css"
import "./style.css"

const Form = ({list,setList,descrip, setDescrip, value, setValue, option, setOption}) => {
 
    const dataForm = (e) => {
        e.preventDefault()
        const data = {
            descrip,
            value,
            option
        }
        setList([...list,data])
        
    }
 
    return (
        <form className="form" onSubmit={dataForm}>
            <div className="form-descr">
                <label className="descricao" htmlFor="descrição">Descrição</label>
                <input className="input-descr" onChange={(e => setDescrip(e.target.value))} type="text" required placeholder="Digite aqui sua descrição" />
                <span className="span-exemplo">Ex: Compra de roupas</span>
            </div>

            <div className="form-valor">
                <section className="label-campo">
                    <label htmlFor="Valor">Valor</label>
                    <label htmlFor="Tipo de valor">Tipo de valor</label>
                </section>

                <section className="input-campo">
                    <input className="input-value" onChange={(e => setValue(Number(e.target.value)))} type="number" placeholder="1 R$" required id="valor" />
                    <select onChange={(e => setOption(e.target.value))} className="select" name="tipo" id="valorTipo">
                        <option value="Entrada">Entrada</option>
                        <option value="Saida">Saida</option>
                    </select>
                </section>
            </div>

            <button className="btn-form" type="submit">Inserir o valor</button>
        </form>
    )
}

export default Form