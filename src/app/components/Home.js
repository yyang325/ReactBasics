import React from "react";

export class Home extends React.Component {
	render() {
		let content = "";
		if (true) {
			content = "This is a Dynamic content. ";
		}
		return (
			<div>
				<p> This is a new Component</p>
				{ content }
			</div>
		);
	}
}