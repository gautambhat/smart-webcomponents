import React from "react";
import ReactDOM from "react-dom";
import { FileUpload } from 'smart-webcomponents-react/fileupload';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<FileUpload ref="fileupload" showProgress multiple uploadUrl=""></FileUpload>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;