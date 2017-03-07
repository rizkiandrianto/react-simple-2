import React, {Component, PropTypes} from 'react';
import { Row } from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setGeneral} from 'redux/actions';

class Home extends Component {
	constructor(props) {
		super(props);
		this.changeState = this.changeState.bind(this);
	}
	changeState(){
		this.props.setGeneral('test', !this.props.test)
	}
	render() {
  	return (
    	<page>
    		<h1 className="red">Home</h1>
				<p>Welcome to React Simple Boilerplate, this boilerplate was made by Rizki Andrianto. This is a simple home page.</p>
				<p>And this is test of redux, the button text will become the value of state <i>test</i> :</p>
				<button onClick={this.changeState}>{this.props.test.toString()}</button>
    	</page>
  	);
	}
}

Home.propTypes = {
	test: PropTypes.bool,
	setGeneral: PropTypes.func
};

export default connect((state)=>{
	return {
		test: state.test
	};
}, dispatch => bindActionCreators({
	setGeneral
}, dispatch))(Home);
