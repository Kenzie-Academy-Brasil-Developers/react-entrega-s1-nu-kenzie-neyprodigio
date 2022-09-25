import imgTrash from "../../assets/trash.png"

const Card = () => {

    return(
        <div>
            <section>
            <h3 className="descri-card">Salário-Mês Dezembro</h3>
            <p className="type-card">Entrada</p>
            </section>
            <section>
                <span className="value-card">R$: 6.952.00</span>
                <img src={imgTrash} alt="" />
            </section>
        </div>
    )
}

export default Card



