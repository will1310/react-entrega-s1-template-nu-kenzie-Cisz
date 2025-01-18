import style from "../Finances/style.module.scss"
import { FinanceForm } from "../FinanceForm"
import { FinanceList } from "../FinanceList"

export const Finances = ( { deposito, setDeposito } ) => {
    
    return(
        <div className={style.financesContainer}>
         <FinanceForm setDeposito={setDeposito}/>
         <FinanceList deposito={deposito} setDeposito={setDeposito}/>
        </div>
    )
}