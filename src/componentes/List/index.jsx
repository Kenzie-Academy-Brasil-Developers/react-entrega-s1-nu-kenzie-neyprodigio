
const Lista = ({filtro, lista, func}) => {

    const todos    = []
    const recebido = []
    const saida    = []

    if (filtro === '') {
        return(
            <ul>
                {todos.map(() =>
                ('Aqui eu importo o card'
                ))}
    
            </ul>
        )

    } else if( filtro === 'entrada') {
        return(
            <ul>
                {recebido.map(() =>
                ('Aqui eu importo o card'
                ))}
            </ul>
        )

    } else {
        return(
            <ul>
                {saida.map(() =>
                ('Aqui eu importo o card'
                ))}
            </ul>
        )
    }
} 

export default Lista