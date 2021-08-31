import "./App.css";
import React from "react";


import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/Repeticao/TabelaProdutos";
import ListaAlunos from "./components/Repeticao/ListaAlunos";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Familia from "./components/basicos/Familia";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

export default (props) => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">

      <Card titulo="#09 - Comnicação Direta" color="#59323C">
        
        <DiretaPai></DiretaPai>

       </Card>

      <Card titulo="#08 - Renderização Condicional" color="#982395">
        
        <ParOuImpar numero = {20}></ParOuImpar>
        <UsuarioInfo usuario = {{nome: 'Fernando'}}></UsuarioInfo>
        <UsuarioInfo usuario = {{email: 'Fer@nando.com'}}></UsuarioInfo>

       </Card>

      <Card titulo="#07 - Lista Produtos" color="#FF432E">
        
       <TabelaProdutos></TabelaProdutos>

      </Card>

      <Card titulo="#06 - Repetição" color="#FF4C65">
        
        <ListaAlunos></ListaAlunos>

      </Card>


        <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
          <Familia sobrenome="Ferreira">
            <FamiliaMembro nome="Pedro"/>
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Gustavo"/>
          </Familia>
        </Card>

        <Card titulo="#04 - Desafio Aleatório" color="#080">
          <Aleatorio min={1} max={100} />
        </Card>

        <Card titulo="#03 - Fragmento" color="#000C66">
          <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parâmetro" color="#FA26A0">
          <ComParametro titulo="Segundo Componente" subtitulo="Muito Legal" />
        </Card>

        <Card titulo=" #01 - Primeiro Componente" color="#059DC0">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
};
