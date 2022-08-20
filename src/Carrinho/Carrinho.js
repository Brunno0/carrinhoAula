import React, { useState } from "react";
import styled from "styled-components";
import Itens from "./Itens";

const CarrinhoStyled = styled.div `
border: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: 10px;
`

function Carrinho(props) {
    const intensDoCarrinho = props.carrinho && props.carrinho.map(item=>{
        return <Itens 
                nome={item.name}
                quantidade={'1'}    
                ></Itens>

    })

    return <CarrinhoStyled>
            Carrinho: 
            {intensDoCarrinho}
            Total: R$ 10,00
            </CarrinhoStyled>

}
export default Carrinho