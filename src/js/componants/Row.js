
import React from "react"

export default class Row extends React.Component {
	render() {
		return (
			<tr>
				<td>1</td>
				<td>{this.props.rowContent.username}</td>
				<td>{this.props.rowContent.recent}</td>
				<td>{this.props.rowContent.alltime}</td>
			</tr>
		)
	}
}
