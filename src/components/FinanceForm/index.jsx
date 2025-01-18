import { useState } from "react"
import style from "../FinanceForm/style.module.scss"

export const FinanceForm = ({ setDeposito }) => {
    const [descricao, setDescricao] = useState("")
    const [valor, setValor] = useState("")
    const [type, setType] = useState("")

    const addDeposito = () => {
        if (descricao && valor) {
            const novoDeposito = {
                id: crypto.randomUUID(),
                descricao,
                valor: parseFloat(valor),
                type,
            };
            setDeposito((deposito) => [...deposito, novoDeposito]);
            setDescricao("")
            setValor("")
            setType("")
            console.log(novoDeposito)
        }
    };

    return(
        <section className={style.financeContainer}>
            <form>
                <div className={style.divDescricao}>
                    <label className="body">Descrição</label>
                    <input 
                    type="text" onChange={(e) => setDescricao(e.target.value)} value={descricao} className="headline" required placeholder="Digite aqui sua descrição"/>
                    <span className="body">Ex: Compra de roupas</span>
                </div>
                <div className={style.divValor}>
                    <label className="body"> Valor (R$)</label>
                    <input type="number" onChange={(e) => setValor(e.target.value)} className="headline" required placeholder="1" value={valor}/>

                    <label className="body">Tipo do valor</label>
                    <select onChange={(e) => setType(e.target.value)} name="typeValue" id="typeValue" value={type} required>
                        <option className="headline" value="">Selecione uma opição</option>
                        <option className="headline" value="entrada">Entrada</option>
                        <option className="headline" value="despesa">Despesa</option>
                    </select>

                </div>
                <div className={style.divButton}>
                    <button onClick={addDeposito} className="headline" type="submit">Inserir valor</button>
                </div>
            </form>
        </section>
    )
}