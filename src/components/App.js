import React from "react";
import Head from "./head.js";
import Body from "./body.js";
import Tail from "./tail.js";
import {Container} from "reactstrap";

class App extends React.Component
{
	constructor(props) {
    super(props);

    this.state = {
    	arr:[],
      total_price:0,
      select1:"",
      qty:0,
      price:0,
      pass:[]
    };
  }


  clicked_fun=(x)=>{
  	//console.log(x)
    this.setState({arr:x});
  	
  }

  componentDidUpdate()
  {
  	//this.state.pass.push(this.state.arr);
  	//console.log(this.state.pass)
  	//this.state.arr;
  }
	render(){
		
		return(

			<div className=" row h-100">
			   <div className="col-sm-12 my-auto">
			     <Container className="pt-3 pb-1 col-sm-12 col-md-6 offset-md-3 bg-info ">
					<Head />
					<Body value={this.state.arr} key={Math.random()}/>
					<Tail click={this.clicked_fun} />
				</Container>
			   </div>
			</div>
			);
		}
}
export default App;