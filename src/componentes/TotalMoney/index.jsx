import "../../reset.css"
import "./style.css"

const TotalMoney = ({list}) => {

    const resultado = 
    list.reduce((acumulador, valorAtual) => valorAtual.option === 'Entrada'? acumulador + valorAtual.value :acumulador - valorAtual.value, 0)
    

    return(
        <div>
            <section className="total">
                <div className="info-div">
                <h2>Valor total:</h2>
                <p>O valor se refere ao saldo</p>
                </div>
                <span className="value-span">$ {resultado}</span>
            </section>
        </div>
    )
}

export default TotalMoney