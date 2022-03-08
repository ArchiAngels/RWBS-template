import React from "react";
import ReactDOM from "react-dom";
import Main from './main.css'
// import ReactDOMServer from 'react-dom/server';

import Preloader from './components/preloader/prelader.jsx';
import Bundle from './components/Bundle/Bundle.jsx';


class Application extends React.Component {

    constructor(props) {
        super(props);
        this.state = { hide:false };
        
        this.handleCallback = this.handleCallback.bind(this);
    }

    handleCallback (){
        console.log('CALLED')
        this.setState({...this.state,hide:true});
    }

    render() {
        return <>

            <Preloader id='Preloader' hide ={this.state.hide}/>

            <Bundle callbackcall={this.handleCallback}/>
        
        </>
    }

}

ReactDOM.render(
    <Application/>,
    document.getElementById('root')
)
