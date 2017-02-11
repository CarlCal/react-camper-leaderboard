
import React from "react"

import Board from "./Board"
import Title from "./Title"

export default class Leaderboard extends React.Component {
	render() {
		return (
			<div id="leaderboard" class="container">
				<Title />
				<Board />
			</div>
		)
	}
}