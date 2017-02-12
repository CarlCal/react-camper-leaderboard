
import $ from "jquery"
import React from "react"

import Row from "./row"

const url = "https://fcctop100.herokuapp.com/api/fccusers/top/"

export default class Board extends React.Component {

	constructor() {
    super();
    this.state = {users: [],
    							target: ''};
  }

  componentDidMount() {
    this.getUser('alltime');
  }

  getUser(e) {
  	var value = (typeof e != 'string') ? e.target.value : e 
	  return $.getJSON(url+value)
			      .then((data) => {
				      	this.setState({users: data,
				      								 target: value})
			      })
  }

	render() {
		return (
			<div class="table-responsive">					
				<table id="board" class="table-bordered">
					<thead>
				  <tr>
				    <th class="displayCenter">#</th>
				    <th class="displayName">Camper Name</th> 
					  <th class="displayCenter"><div class="radiowrapper" id="wrap1">
							  	<input type="radio" name="sort" value="recent" id="30-Days" 
							  				 onChange={this.getUser.bind(this)} checked={this.state.target == "recent"}/>
							  	<label for="30-Days">Points in past 30 days</label>
								</div>
						</th>
				    <th class="displayCenter"><div class="radiowrapper" id="wrap2">
						    	<input type="radio" name="sort" value="alltime" id="all-Time" 
						    				 onChange={this.getUser.bind(this)} checked={this.state.target == "alltime"}/>
						    	<label for="all-Time">All time points</label>
								</div>
						</th>
				  </tr>
				  </thead>
				  <tbody>
				  {
				  	this.state.users.map((user, i) => {
				  		return <Row key={i} userIndex={i} rowContent={user}/>
				  	})
				  }
				  </tbody>
				</table>
			</div>
		)
	}
}
