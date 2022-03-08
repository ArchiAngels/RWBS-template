import React from "react";
import styled from "styled-components";


import Menu from './menu.css';

import TestElem from '../testEl.jsx';

import Button from '../menuBtn/menuButton.jsx';


export default ()=>{

    let [count,setCount] = React.useState(50);

    let block ;

    window.addEventListener('DOMContentLoaded', (event) => {
        block = document.getElementById('Menu');
    });

    let HandleVisible = (visible)=>{
        visible = !visible;
        if(visible){
            block.classList.remove('MenuHidden')
        }else{
            block.classList.add('MenuHidden')
        }
    }

    let howMuch = (num)=>{
        let arr = [];

        for(let i = 0; i < num; i++){
            arr.push(i);
        }

        return arr.map((e,i)=>{
            return <TestElem key={i} id={i} all={num}/>
        })

    }

    let Menu = styled.div`
        width:30vw;
        height:100vh;

        background-color: #e2e2e2;
        position:relative;
        transition: margin-left 0.15s;
    `;

    let MenuContainer = styled.div`
        padding:0.5rem 0;
        height:100%;
        overflow-y:scroll;
        &:-webkit-scrollbar {
            display: none;
        }
        -ms-overflow-style: none; 
        scrollbar-width: none;
        position:relative;



    `;

    let P = styled.p`
        width:100%;
        font-size:1rem;
    `;
    
    return <>
        <Menu className='Menu' id='Menu'>

            <Button callBack = {HandleVisible}/>

            <MenuContainer className="Menu__container">

                <P>All items : {count}</P>

                {howMuch(count)}

            </MenuContainer>

        </Menu>
    </>

    
}
