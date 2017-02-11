
import React from "react"

export default class Row extends React.Component {
	render() {
		return (
			<tr> 
				<td>{this.props.rowContent.key}</td>
				<td><img class="profile-pic" src={this.props.rowContent.img} />{this.props.rowContent.name}</td>
				<td>{this.props.rowContent.recent}</td>
				<td>{this.props.rowContent.alltime}</td>
			</tr>
		)
	}
}