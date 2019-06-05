import React, { Component } from 'react';

// JS object which gives you access to a string version of your css styles. The CSS style was adjusted to be unique
// this is the only place where these styles can have an effect. (CSS Modules)
import classes from './App.css';
import Person from './Person/Person';

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

		let persons = null;
		let btnClass = '';

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

			btnClass = classes.Red;

		}

		const assignedClasses = [];
		if(this.state.persons.length <= 2) {
			assignedClasses.push(classes.red); // classes = ['red']
		}
		if(this.state.persons.length <= 1) {
			assignedClasses.push(classes.bold); // classes = ['red','bold']
		}
	    return (
		      	<div className={classes.App}>
			        <h1>Hi, I'm a React App</h1>
			        <p className={assignedClasses.join(' ')}>This is really working!</p>
			        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
			        
			        {persons}

			    </div>
	    );
	    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
