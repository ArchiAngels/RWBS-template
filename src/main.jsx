import React from "react";
import ReactDOM from "react-dom";
import Main from './main.css'
// import ReactDOMServer from 'react-dom/server';


import AllComponents from './allComponents.jsx';

let App = ()=>{
    return <AllComponents/>
}

// ReactDOMServer.renderToString(
//     <App />
// )

ReactDOM.render(
    <App />,
    document.getElementById('root')
)