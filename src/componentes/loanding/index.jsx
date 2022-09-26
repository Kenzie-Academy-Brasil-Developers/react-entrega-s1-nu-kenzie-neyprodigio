import "./style.css"
import imgLoading from "../../assets/NoCard.png"

const Loading = () => {
    return(
        <div>
            <img className="img-load" src={imgLoading} alt="Imagem de carregamento" />
        </div>
    )
}

export default Loading