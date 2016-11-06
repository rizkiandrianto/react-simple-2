import React from 'react';
import { Row } from 'react-bootstrap';

class Home extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	name: ['loading...'],
	    	login: ['loading...']
	    };
	}

	componentDidMount() {
	}

	componentWillMount() {
	}
  	render() {
    	return (
	    	<page>
	    		<h1 className="red">Home</h1>
					<p>Welcome to React Simple Boilerplate, this boilerplate was made by Rizki Andrianto. This is a simple home page.</p>
	    	</page>
    	)
  	}
}

export default Home;
