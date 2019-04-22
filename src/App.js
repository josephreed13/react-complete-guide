import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ name: 'Joe', age: 22 },
			{ name: 'Kelly', age: 23 },
			{ name: 'Max', age: 28 }
		],
		otherState: 'some other value'
	}

	switchNameHandler = (newName) => {
		// console.log("was clicked");
		// DONT do this this.state.persons[0].name = 'Joseph';
		this.setState({
			persons: [
				{ name: newName, age: 22 },
				{ name: 'Kelly', age: 23 },
				{ name: 'Max', age: 27 }
			]
		}) 
	}

	nameChangedHandler = (event) => {
		this.setState({
			persons: [
				{ name: 'Joe', age: 22 },
				{ name: event.target.value, age: 23 },
				{ name: 'Max', age: 26 }
			]
		}) 
	}

	render() {
		
		// 'inline style'
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

	    return (
	      <div className="App">
	        <h1>Hi, I'm a React App</h1>
	        <p>This is really working!</p>
	        <button 
	        style={style}
	        onClick={() => this.switchNameHandler('Joseph!!')}>Switch Name</button>
	        <Person 
	        	name={this.state.persons[0].name} 
	        	age={this.state.persons[0].age}
        	/>
	        <Person 
	        	name={this.state.persons[1].name} 
	        	age={this.state.persons[1].age}
	        	click={this.switchNameHandler.bind(this,'Joe!')}
	        	changed={this.nameChangedHandler}>
	        	My hobbies: Accounting
        	</Person>
	        <Person 
	        	name={this.state.persons[2].name} 
	        	age={this.state.persons[2].age}
        	/>
	      </div>
	    );
	    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
