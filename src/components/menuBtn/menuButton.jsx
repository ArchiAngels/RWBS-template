import React from "react";
import styled from "styled-components";

export default (props)=>{

    let [visible,setVisible] = React.useState(true);

    let HandleClick = () =>{
        props.callBack(visible);
        setVisible(!visible);
    }

    let ShowHide = styled.div`
        width:2rem;
        height:2rem;
        position:absolute;
        background:${visible?'lightcoral' :'lightgreen'};
        top:0;
        right:-2rem;
        z-index:3;
        &:hover{
            cursor:pointer;
        }
    `;

    

    let OpenLines = ()=>{

        let Span = styled.span`
            width:1rem;
            height:0.1rem;
            display:block;
            background:#000;
            margin:2px;

        `;
        let Container = styled.div`
            width:100%;
            height:100%;
            display:flex;
            flex-direction:column;  
            justify-content: center;
            align-items: center;
        `;

    return <Container>
            <Span/>
            <Span/>
            <Span/>
        </Container>
    }
    let CloseLines = ()=>{

        let Span = styled.span`
            width:1rem;
            height:0.1rem;
            display:block;
            background:#000;

            position:absolute;
            top:50%;
            left:50%;

        `;



        let LeftSpan = styled(Span)`
            transform:rotateZ(-45deg) translate(-50%,-50%);
        `;

        let RightSpan = styled(Span)`
            transform:rotateZ(45deg) translate(-50%,-50%);
        `;

        return <>
            <LeftSpan/>
            <RightSpan/>
        </>
    }

    return <>
        <ShowHide onClick={HandleClick}>
            {visible 
                ? <CloseLines />
                : <OpenLines />
            }
        </ShowHide>
    </>
}