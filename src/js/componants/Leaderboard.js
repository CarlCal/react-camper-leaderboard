
import MediaQuery from 'react-responsive'
import React from "react"

import Board from "./Board"
import Title from "./Title"

export default class Leaderboard extends React.Component {
	render() {
		return (
			<div id="leaderboard" class="container">
			  <MediaQuery query='(max-width: 660px)'>
        	<Board />
        </MediaQuery>
        <MediaQuery query='(min-width: 661px)'>
        	<Title />
					<Board />
        </MediaQuery>
			</div>
		)
	}
}