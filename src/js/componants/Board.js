
import $ from "jquery"
import React from "react"

import Row from "./row"

export default class Board extends React.Component {

	constructor() {
    super();
    this.state = {users: []};
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
	    return $.getJSON("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
				      .then((data) => {
				      	var arr = []

				      	/*Check if for loop is quicker*/
				      	data.forEach((element, i) => {
				      		var user = {
					      		key: (i + 1),
					      		img: element.img,
					      		name: element.username,
					      		recent: element.recent,
					      		alltime: element.alltime,
					      	}

					      	arr.push(user)

					      	this.setState({users: arr})
				      	})
				      })
  }

	render() {
		return (
			<div class="table-responsive">					
				<table id="board" class="table-bordered">
					<thead>
				  <tr>
				    <th>#</th>
				    <th>Camper Name</th> 
					  <th><div class="radiowrapper" id="wrap1">
							  	<input type="radio" name="sort" value="30Days" id="30-Days" />
							  	<label for="30-Days">Points in past 30 days</label>
								</div>
						</th>
				    <th><div class="radiowrapper" id="wrap2">
						    	<input type="radio" name="sort" value="allTime" id="all-Time" />
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
