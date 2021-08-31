import React from "react";
import IndiretaFilho from "./IndiretaFilho";


export default (props) => {

    let nome = "?"
    let idade = 0
    let nerd = false

    function fornecerInformacoes(nomeParam, idadeParam, nerdParam){
        nome = nomeParam
        idade = idadeParam
        nerd = nerdParam

        console.log(nomeParam, idadeParam, nerdParam)
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
