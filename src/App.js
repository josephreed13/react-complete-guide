import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
	state = {
		persons: [
			{ id: 'asdf23', name: 'Joe', age: 22 },
			{ id: 'hgfdj3', name: 'Kelly', age: 23 },
			{ id: 'jfbd34', name: 'Max', age: 28 }
		],
		otherState: 'some other value',
		showPersons: false
	}

	nameChangedHandler = (event, id) => {
		// find id
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});

		// copy of person
		const person = {
			...this.state.persons[personIndex]
		};

		// set name of copy to value in the change event
		person.name = event.target.value;

		// create copy of state array
		const persons = [...this.state.persons];

		// update person in the copy of persons array
		persons[personIndex] = person;

		// update state with copy
		this.setState({persons: persons}); 
	}

	deletePersonsHandler = (personIndex) => {
		// const persons = this.state.persons.slice();
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({persons: persons});
	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow});
	}

	render() {
		
		// 'inline style'
		const style = {
			backgroundColor: 'green',
			color: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
			':hover': {
				backgroundColor: 'lightgreen',
				color: 'black'
			}
		};

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return <Person 
								click={() => this.deletePersonsHandler(index)}
								name={person.name} 
								age={person.age}
								key={person.id}
								changed={(event) => this.nameChangedHandler(event, person.id)}/>
					})}
		        </div>
			);

			style.backgroundColor = 'red';
			style[':hover'] = {
				backgroundColor: 'salmon',
				color: 'black'
			}
		}

		const classes = [];
		if(this.state.persons.length <= 2) {
			classes.push('red'); // classes = ['red']
		}
		if(this.state.persons.length <= 1) {
			classes.push('bold'); // classes = ['red','bold']
		}
	    return (
	    	<StyleRoot>
		      	<div className="App">
			        <h1>Hi, I'm a React App</h1>
			        <p className={classes.join(' ')}>This is really working!</p>
			        <button 
			        style={style}
			        onClick={this.togglePersonsHandler}>Toggle Persons</button>
			        
			        {persons}

			    </div>
		    </StyleRoot>
	    );
	    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium(App);
