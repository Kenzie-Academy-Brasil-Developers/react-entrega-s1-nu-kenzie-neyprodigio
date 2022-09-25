import Card from "../Card"
import './style.css'

const Finances = () => {

    return(
        <div>
            <header>
                <p className="title">Resumo financeiro</p>
                <button>Todos</button>
                <button>Entradas</button>
                <button>Dispesas</button>
                <Card/>
            </header>
        </div>
    )
}

export default Finances