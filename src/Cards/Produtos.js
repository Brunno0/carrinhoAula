import React from "react";
import styled from "styled-components";


const CardProdutos = styled.div `
display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 10px;
  margin: 10px 0;
`

function Produtos(props) {

return <div> 

  <CardProdutos>
     {props.produto.name} 
  
  <p>{props.produto.price}</p>
 
  <button onClick={()=>props.adicionarAoCarrinho(props.produto)}>Comprar</button>
  </CardProdutos>

</div>

}
export default Produtos