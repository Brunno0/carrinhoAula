import React from "react";
import styled from "styled-components";

const ItensStyled = styled.div `
display: flex;
align-items: center;
justify-content: space-between;
p {
  margin: 10px 0;
}
border-radius: 5px;
border:solid 1px;
padding:10px;
margin:10px;
`

function Itens(props) {

    return <ItensStyled>
            <p>{props.name}</p>
            <p>Quantidade:{props.quantidade} </p>
            <button onClick={()=>props.removerDoCarrinho(props.produto)}>Remover</button>
             </ItensStyled>

}
export default Itens