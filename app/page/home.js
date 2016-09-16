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
	    	<div>
	    		<p>Home</p>
	    	</div>
    	)
  	}
}

export default Home;
