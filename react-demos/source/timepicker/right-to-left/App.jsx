import React from "react";
import ReactDOM from "react-dom";
import { TimePicker } from 'smart-webcomponents-react/timepicker';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<TimePicker rightToLeft locale="he"></TimePicker>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
