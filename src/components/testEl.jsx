import React from "react";

import styled from 'styled-components'



export default (props)=>{
    let P = styled.p`
        color:var(--red);
        line-height:2rem;
    `;

    let Div = styled.div`
        
        width:100%;
        text-align:center;
    `;

    return <Div>
        <P>item {props.id}</P>
    </Div>
}