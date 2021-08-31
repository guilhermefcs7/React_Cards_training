import React from "react";
import produtos from "../../data/produtos";
import "./TabelaProdutos.css";

export default (props) => {
  const listaProdutos = produtos.map((produto, i) => {
    return (
      <table>
        <tr key={produto.id} className={i % 2 === 0 ? "Par" : ""}>
          <td>{produto.id}</td>
          <td>{produto.nome_produto}</td>
          <td> {produto.preco_produto.replace(".", ",")}</td>
        </tr>
      </table>
    );
  });

  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
      </table>
      {listaProdutos}
    </div>
  );
};
