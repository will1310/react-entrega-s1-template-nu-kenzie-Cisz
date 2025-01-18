import style from "../financeCard/style.module.scss"

export const FinanceCard = ({ entrada, deposito, setDeposito}) => {
    const removerDeposito = (id) => {
        const atualizarDepositos = deposito.filter((entrada) => entrada.id !== id);
        setDeposito(atualizarDepositos);
    };
    
    return(
        <div className={entrada.type == "entrada" ? style.cardContainer : style.cardContainerDespesa }>
            <div>
                <h3 className="title-3">{entrada.descricao}</h3>
                <span className="body">{entrada.type}</span>
            </div>
            <div className={style.priceDiv}>
                <p className="body">R$ {entrada.valor}</p>
                <button className="excluir" onClick={() => removerDeposito(entrada.id)}>Excluir</button>
            </div>
            
        </div>
    )
}