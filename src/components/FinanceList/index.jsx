import { FinanceCard } from "./financeCard"
import style from "../FinanceList/style.module.scss"

export const FinanceList = ( { deposito, setDeposito } ) => {

    
    return (
        <section className={style.financeListContaienr}>
            <h3 className="title-3">Resumo dinanceiro</h3>
            <ul>
                {deposito.map ((entrada) => {
                    return(
                        <FinanceCard key={entrada.id} entrada={entrada} deposito={deposito} setDeposito={setDeposito} />
                    )
                })}
                
            </ul>
            
        </section>
    )
}