import React, { cloneElement } from "react";

export default (props) => {
  return (
    <div>
        {
            /*
            Recebe a lista de todos os filhos(props.children) 
            Para cada um dos filhos vai chamar a função child
            recebendo o props do Pai (Familia)
            */
            React.Children.map(props.children, (child) =>{
                return cloneElement(child, props)
            })  
        }
    </div>
  );
};
