import React from "react";
import {Jumbotron,Container,Col, Row, Table} from "reactstrap" 

let count=0;
class body extends React.Component
{
	constructor(props) {
    super(props);
    this.state={
    	hr:0,
    	min:0,
    	bill_Number:0,
    	final:0,
    	total_price:0,
    	select1:"",
    	qty:0,
    	price:0,
    	value:[],
 		pass:[],
 		counter:0,
 		key1:Math.random()
    }
  }

 getCurrentDate=(separator='')=>{
	let newDate = new Date()
	let date = newDate.getDate();
	let month = newDate.getMonth() + 1;
	let year = newDate.getFullYear();
	let hr=newDate.getHours();
	let min=newDate.getMinutes();
	
	return `${date} : ${month} : ${year}`
	}

	 componentDidMount() {
	 this.state.pass.push(this.props.value)
	 	
  }

  componentDidUpdate()
  {
  	
  	 
  	 // this.state.pass.push(this.props.value);dfgdfgdfg
  	console.log(this.state.pass)
	
  }
	// this.setState({date:Date.now()});
	render(){
		
		return(

				<div>
			      <Jumbotron className="pt-3 pb-1 pt-1">
			        <Container className="text-center">
			         <div className="bg-info">
					      <label className="btn btn-info float-left">Bill No : </label><label id="bill_Number" className="btn btn-info float-left">11</label>
					      <label className="btn btn-info float-right">{this.getCurrentDate()}</label><label className="btn btn-info float-right lead">Date</label>
					  </div>
			         <div>
			         	<Table className="table table-bordered">
					        <thead>
					         <tr>
					            <th>Sr</th>
					            <th>Index</th>
					            <th>Quantity</th>
					            <th>Price</th>
					            <th>Total</th>
					          </tr>					       
					        </thead>
					        <tbody>
					        {this.state.pass.map((r) => ( 
					            <tr key={this.key1}>
					            	<td >{r}</td>
						       	</tr>
						       	))}      
					        </tbody>
					      </Table>
			         </div>
			           <div class="lead pb-0 pt-0 text-right card-footer bg-transparent border-success">Final :<label className="lead">{this.final}</label> </div>
			        </Container>
			      </Jumbotron>
			    </div>
			);
	}
}
export default body;