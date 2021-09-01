import React, {useState} from "react";
import IndiretaFilho from "./IndiretaFilho";


export default (props) => {

    
    const [nome, setNome]  = useState("?") // usando o operador destructing e atribuindo o seu valor no state
    const [idade, setIdade]  = useState(0)
    const [nerd, setNerd]  = useState(false)
    

    function fornecerInformacoes(nome, idade, nerd){
       setNome(nome)
       setIdade(idade)
       setNerd(nerd)
    }
    //nome idade nerd
    return(

        <div>
           <div>
            <span>{nome} </span>
            <span><strong>{idade}</strong></span>
            <span> {nerd ? 'verdadeiro' : 'Falso'}</span>
            </div> 
        <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
};
