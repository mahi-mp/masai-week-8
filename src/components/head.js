import React from "react";
import {Jumbotron,Container} from "reactstrap";
class head extends React.Component
{
	
	render(){
		return(
			  <div>
			      <Jumbotron className="pb-1 pt-1">
			        <Container className=" text-center">
			          <h1 className="display-4">AllDayOff Restaurant </h1>
			          <h6 >{`#Ispat Bhavan, Lodhi Road, NEW DELHI, 110003, INDIA.`}</h6>
			        </Container>
			      </Jumbotron>
			    </div>
			);
	}
}
export default head;