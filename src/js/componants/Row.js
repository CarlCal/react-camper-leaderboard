
import React from "react"

export default class Row extends React.Component {
	render() {
		return (
			<tr> 
				<td class="displayCenter" >{this.props.userIndex+1}</td>
				<td class="displayName" ><img class="profile-pic" src={this.props.rowContent.img} /> {this.props.rowContent.username}</td>
				<td class="displayCenter ">{this.props.rowContent.recent}</td>
				<td class="displayCenter ">{this.props.rowContent.alltime}</td>
			</tr>
		)
	}
}