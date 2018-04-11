import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

let root = document.getElementById('root');

class Counter extends Component {
    constructor(props){
    	super(props);
    	this.state = {count: 0};
    }

    handlerClick = () => {
        // this.setState({count: this.state.count + 1});
        // this.setState({count: this.state.count + 1});

        this.setState((prevState) => ({count: prevState.count + 1}));
        this.setState((prevState) => ({count: prevState.count + 1}));

        this.setState({count: this.state.count + 1}, () => {
            this.setState({count: this.state.count + 1});
        });
    }

    render() {
        return (
            <div>
                <h3 onClick={this.handlerClick}>{this.state.count}</h3>
            </div>
        )
    }
}

ReactDOM.render(<Counter title={'hello clock!'}/>, root);
