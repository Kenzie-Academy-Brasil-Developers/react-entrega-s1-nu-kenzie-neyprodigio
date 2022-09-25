
import DashBoard from "../Dashboard"
import { useState } from "react"

const Form = () => {

    const [descrip, setDescrip] = useState('')
    const dadosForm = (e) => {
        e.preventDefault()

       
        }
    
    return (
        <form onSubmit={dadosForm}>
            <div className="form-descr">
                <label htmlFor="Descrição">Descrição</label>
                <input /* onChange={(e => setDescrip(e.target.value))} */ type="text" className="input-descr" required placeholder="Digite aqui sua descrição" />
                <span className="span-exemplo">Ex: Compra de roupas</span>
            </div>

            <div className="form-valor">
                <section className="label-campo">
                    <label htmlFor="Valor">Valor</label>
                    <label htmlFor="Tipo de valor">Tipo de valor</label>
                </section>

                <section className="input-campo">
                    <input type="number" placeholder="1 R$" required id="valor" />
                    <select name="tipo" id="valorTipo">
                        <option value="">Entrada</option>
                        <option value="">Saida</option>
                    </select>
                </section>
            </div>

            <button type="submit">Insira o valor</button>
        </form>
    )
}

export default Form