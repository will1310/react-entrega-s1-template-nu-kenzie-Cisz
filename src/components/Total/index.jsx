import style from "../Total/style.module.scss"

export const Total = ( { deposito } ) => {
    const total = deposito.reduce((add, entrada) => {
        return entrada.type === "Entrada"
        ? add + entrada.valor
        : add - entrada.valor;
    }, 0);

    return(
        <section className={style.totalContainer}>
            <div>
                <h3 className="title-3">Valor total:</h3>
                <span className="body">O valor se refere ao saldo</span>
            </div>
            <h3 className={`${style.resultValor} ${"title-3"}`}>R$ {total.toFixed(2)}</h3>
        </section>
    )
}