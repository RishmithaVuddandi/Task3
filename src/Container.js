import { Component } from 'react';
const arr = ["#cf0606", "#07ed1e", "#073ded", "#e9ed07", "#ed07ed", "#07ede9", "#faa716", "#91276a", "#fcd0c7", "#28a745", "#e65f05", "#087bc7", "#4a1b07", "#f57842", "#164266", "#b89c12"]

export class Container extends Component{
    
    constructor(){
        super();
        this.state = {
            color: "#28a745"
        }
        this.toggle = false;
    }

    handleColor = () => {
        this.setState({
            toggle:true
        });
    }

    checkColor = (e) => {
        this.setState({
            color: e.target.style.backgroundColor,
            toggle:false
        });
    }

    render(){
        return(
            <div className='container-lg mt-1 px-6' style={{height:"700px", backgroundColor:"#bfa3cc"}}>
                <h2 className='pt-5 d-flex justify-content-center fw-bolder' style={{textAlign:"center", fontFamily:'serif'}}>Color Picker</h2>
                <div className="container-lg mt-3 border" style={{backgroundColor:"#fcd0c7", height:"500px", width:"1100px", borderRadius:"20px", boxShadow:"2px 2px 8px black",marginLeft:"auto", marginRight:"auto"}}>
                    <div className='d-flex justify-content-center align-items-center my-5'>
                        {(this.state.toggle)?arr.map((item) => {
                            return(
                                <button onClick={this.checkColor} className='mx-2 border-0' style={{width:"50px", height:"50px", backgroundColor:item, boxShadow:"2px 2px 10px #3b383a"}} ></button>
                            );
                        })
                        :<p></p>}
                    </div>
                    <div className='d-flex justify-content-center align-items-center' style={{textAlign:"center"}}>
                        <button id="clickButton" className='text-light border-0 px-3 py-2' onClick={this.handleColor} style={{backgroundColor:this.state.color, height:"50px", width:"100px",}}>Pick a color</button>
                    </div>
                </div>
            </div>
        );
    }
}
