
import React from "react"

import Leaderboard from "./Leaderboard"

export default class Body extends React.Component {
	render() {
		return (
			<div id="main" class="container">
				<Leaderboard />
			</div>
		)
	}
}