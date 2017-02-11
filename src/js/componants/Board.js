
import $ from "jquery"
import React from "react"

import Row from "./row"

const url = "https://fcctop100.herokuapp.com/api/fccusers/top/"

export default class Board extends React.Component {

	constructor() {
    super();
    this.state = {users: [],
    							target: "alltime"};
  }

  componentDidMount() {
    this.getUser();
  }

  apiChange(e) {
  	this.setState({target: e.target.value})
  }

  //These two set states should happen at the same time

  getUser() {
	    return $.getJSON(url+this.state.target)
				      .then((data) => {
					      	this.setState({users: data})
				      })
  }

	render() {
		this.getUser()
		return (
			<div class="table-responsive">					
				<table id="board" class="table-bordered">
					<thead>
				  <tr>
				    <th>#</th>
				    <th>Camper Name</th> 
					  <th><div class="radiowrapper" id="wrap1">
							  	<input type="radio" name="sort" value="recent" id="30-Days" 
							  				 onChange={this.apiChange.bind(this)} checked={this.state.target == "recent"}/>
							  	<label for="30-Days">Points in past 30 days</label>
								</div>
						</th>
				    <th><div class="radiowrapper" id="wrap2">
						    	<input type="radio" name="sort" value="alltime" id="all-Time" 
						    				 onChange={this.apiChange.bind(this)} checked={this.state.target == "alltime"}/>
						    	<label for="all-Time">All time points</label>
								</div>
						</th>
				  </tr>
				  </thead>
				  <tbody>
				  {
				  	this.state.users.map((user, i) => {
				  		return <Row key={i} rowContent={user}/>
				  	})
				  }
				  </tbody>
				</table>
			</div>
		)
	}
}
