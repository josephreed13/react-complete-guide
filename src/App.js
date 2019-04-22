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
		otherState: 'some other value',
		showPersons: false
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

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow});
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

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map(person => {
						return <Person 
								name={person.name} 
								age={person.age}/>
					})}
		        </div>
			);
		}

	    return (
	      <div className="App">
	        <h1>Hi, I'm a React App</h1>
	        <p>This is really working!</p>
	        <button 
	        style={style}
	        onClick={this.togglePersonsHandler}>Toggle Persons</button>
	        
	        {persons}

	      </div>
	    );
	    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
