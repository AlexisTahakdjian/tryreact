import React from 'react';
import ReactDOM from 'react-dom'; 
import './assets/style/index.css';
import Header from './Header'
import Footer from './Footer'
import * as serviceWorker from './serviceWorker';


class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bgColor: ""
		};
	}

	buttonClick = () => {
		let randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
		this.setState({
			bgColor: randomColor
		});
	}

	render() {
		return ( 
			<div>
				<Header />
				<div className="main" style={{ backgroundColor: this.state.bgColor }}>
					<button
						className='button'
						onClick={this.buttonClick}
					>
						Changez la couleur</button>
				</div> 
				<Footer / >
			</div>
		);
	}
}

ReactDOM.render( <Main/> ,
	document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();