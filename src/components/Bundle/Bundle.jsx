import React from "react";

class AllInOne extends React.Component{

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        console.log("Mounted");
        setTimeout(()=>{
            this.props.callbackcall();
        },3000)
        
    }


    render(){

        return <>

            <div id='MainScreen'>
                    
                    <h1>Hi there! <br/> Mikita</h1>
                    <p>Welcome</p>
            </div>
        
        </>
        
        
                
    }

}

export default AllInOne;