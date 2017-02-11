
import React from "react"

import Table from "./Table"
import Title from "./Title"

export default class Leaderboard extends React.Component {
	render() {
		return (
			<div id="leaderboard" class="container">
				<Title />
				<Table />
			</div>
		)
	}
}