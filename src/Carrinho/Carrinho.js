import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Itens from "./Itens";

const CarrinhoStyled = styled.div`
border: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: 10px;
`

function Carrinho(props) {
    const [total, setTotal] = useState(0)

    const intensDoCarrinho = props.carrinho && props.carrinho.map((item) => {
        return <Itens
            name={item.name}
            quantidade={item.quantidade}
            preco={item.price}
            removerDoCarrinho={props.removerDoCarrinho}
            produto={item}
            key={item.id}
        ></Itens>
    })
   
    useEffect(() => {
        let valorTotal = 0
        if (props.carrinho.length) {
            props.carrinho.map((item) => {
                return (valorTotal += (item.quantidade * item.price))
            })
        }
        setTotal(valorTotal)
    }, [props.carrinho])

    return <CarrinhoStyled>
            Carrinho:
                 {intensDoCarrinho}
            Total: {total}
    </CarrinhoStyled>

}
export default Carrinho