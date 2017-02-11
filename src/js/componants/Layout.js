
import React from "react"

import Body from "./Body"
import Header from "./Header"

export default class Layout extends React.Component {

	render() {
		return (
			<div>
				<Header />
				<Body />
			</div>
		)
	}
}