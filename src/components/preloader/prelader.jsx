import React from "react";
import styled from 'styled-components';
import ReactDOM from 'react-dom';



let Preloader = (props) =>{

    console.log("HIDDEN::",props.hide);

    let [Color,setColor] = React.useState(0);

    let x;

    React.useEffect(()=>{
        x = document.getElementById('Preloader');

        if (props.hide){
            x.classList.add('hide');
            x.classList.remove('visible');
        }else {
            x.classList.add('visible');
            x.classList.remove('hide');
        }
    })

    let Template = styled.div`
        
        z-index:10;

        background:${Color%2 == 0? '#fff' : '#000'};

        transition: all 3s;

        &.visible{
            width:100vw;
            height:100vh;
        }
        &.hide{
            width:0vw;
            height:0vh;
        }

    `;

    let Paragraph = styled.p`
        text-align:center;
        line-height:100vh;
    `;

    
    

    
    return <>

        <Template onClick={()=>{setColor(++Color)}} id='Preloader' className='visible'>
            <Paragraph>{props.hide? '' : 'wait'}</Paragraph>
        </Template>

    </>
}

export default Preloader;