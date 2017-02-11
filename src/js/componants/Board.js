
import $ from "jquery"
import React from "react"

import Row from "./row"

export default class Board extends React.Component {

	constructor() {
    super();
    this.state = {user: ''};
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    return $.getJSON(' https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
			      .then((data) => {
			        this.setState({ user: data[0] });
			      });
  }

	render() {
		return (
			<div class="table-responsive">					
				<table id="board" class="table-bordered">
					<thead>
				  <tr>
				    <th>#</th>
				    <th>Camper Name</th> 
				    <th>Points in past 30 days</th>
				    <th>All time points</th>
				  </tr>
				  </thead>
				  <tbody>
				  	<Row rowContent={this.state.user}/>
				  </tbody>
				</table>
			</div>
		)
	}
}
