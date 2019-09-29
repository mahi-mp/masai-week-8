import React from "react";
import {Container, Jumbotron, Col, Row, Button} from "reactstrap";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import {  ButtonGroup } from 'reactstrap';
class tail extends React.Component
{
	constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      total:0,
      total_price:0,
      finaladd:0
    };
  }

calculate=()=>{

}

	
	add_tax=()=>{
		let get_tax=document.getElementById("tax_id").value;
		//console.log(get_tax);
	}

	add_service_charge=()=>{
		let get_sc=document.getElementById("sc_id").value;
		//console.log(get_sc);
	}

	add_discount=()=>{
		let get_dis=document.getElementById("dis_id").value;
		//console.log(get_dis);
	}

 	add_to_port=()=>{
		let select1=document.getElementById("inputGroupSelect01").value;
		let qty=document.getElementById("inputGroupSelect02").value;
		//console.log("item" +select1);
		//console.log("qty" +qty);
		let arr=[];
			if (select1=="Tea")
				{
					this.price=10;
				}
				else if (select1== "Break")
				{
					this.price=30;
				}
				else if (select1== "Lunch")
				{
					this.price=60;
				}
				else if (select1== "Snacks")
				{
					this.price=80;
				}
                else if (select1== "Dinner")
				{
					this.price=80;
				}
				else
				{
					this.price=1
				}
				//console.log("price" +this.price);
	if (select1=="Tea")
				{
					this.total_price=this.price*qty
				}
				else if (select1=="Break")
				{
					this.total_price=this.price*qty
				}
				else if (select1=="Lunch")
				{
					this.total_price=this.price*qty
				}
				else if (select1=="Snacks")
				{
					this.total_price=this.price*qty
				}
				else if (select1="Dinner")
				{
					this.total_price=this.price*qty
				}
				else
				{
					this.total_price=this.price*qty
				}

					arr.push(this.price,select1,qty,this.total_price);
					// arr.push(select1);
					// arr.push(qty);
					// arr.push(this.price);
					//this.setState(arr+=arr)
				this.props.click(arr);
				//console.log("total_price" + (this.finaladd=Number(this.finaladd)+Number(this.total_price)));
				
}
	render(){
		return(
			<div>
			      <Jumbotron className="pt-3 pb-1 pt-1">
			        <Container className=" text-center">
			      <div className=" input-group">
						<div className= " Container">
						 <div className="input-group mb-3">
							  <div className="input-group-append">
							    <label className="input-group-text" for="inputGroupSelect01">Select Item</label>
							  </div>
							  <select className="custom-select" id="inputGroupSelect01">
							    <option selected value="Tea" >Tea</option>
							    <option value="Break">Break Fast</option>
							    <option value="Lunch">Lunch </option>
							    <option value="Snacks">Snacks</option>
							     <option value="Dinner">Dinner</option>
							  </select>
							</div>
						</div>
						<div className="Container">
						<div >
						 <div className="input-group mb-3">
							  <div className="input-group-append">
							    <label className="input-group-text" for="inputGroupSelect02">Quantity</label>
							  </div>
							  <select className="custom-select" id="inputGroupSelect02">
							    <option selected value="1" >1</option>
							    <option value="2">2</option>
							    <option value="3">3</option>
							    <option value="4">4</option>
							    <option value="5">5</option>
							  </select>
							</div>
							</div>
						</div>
						<button onClick={this.add_to_port} type="button" class="ml-3 btn-sm btn-success">Add</button>
					</div>
						<div className="mt-4 row">
							<div className=" col-7" >
				        		<Button  outline color="danger">Final Submit!</Button>
				        	</div>

				        	<div className="input-group-sm mb-3 col" >
				        	<ButtonGroup  >
					          <input id="tax_id" type="text" className="form-control" /> <Button onClick={this.add_tax} className="mr-2 btn btn-sm" color="primary">Tax%</Button>
					          <input id="sc_id" type="text" className="form-control" /> <Button onClick={this.add_service_charge} className="mr-2 btn btn-sm" color="primary">SC.rs</Button>
					          <input id="dis_id" type="text" className="form-control" /> <Button onClick={this.add_discount} className="btn btn-sm" color="primary">Dis</Button>
					        </ButtonGroup>
					        </div>
				        </div>
			        </Container>
			        
			      </Jumbotron>
			    </div>
			);
	}
}
export default tail;