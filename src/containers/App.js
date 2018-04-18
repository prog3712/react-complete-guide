import React, { PureComponent } from 'react';

// Styles
import classes from './App.css';

// Components
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// High Order Components
import Auxiliary from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';
//import WithClass from '../hoc/WithClass';

// Error Component
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        {id: 'abc123', name: 'Max', age: 28},
        {id: 'abc456', name: 'Manu', age:29},
        {id: 'abc789', name: 'Stephanie', age: 26}
      ],
      showPersons: false,
      toggleClicked: 0
    };
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

  // state = {
  //   persons: [
  //     {id: 'abc123', name: 'Max', age: 28},
  //     {id: 'abc456', name: 'Manu', age:29},
  //     {id: 'abc789', name: 'Stephanie', age: 26}
  //   ],
  //   showPersons: false
  // }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => {
      return {
        showPersons:!doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  render() {

    console.log('[App.js] Insider render()');

    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangeHandler}/>;
    }

    return (
      <Auxiliary>
        <button onClick={() => {this.setState({showPersons:true})}}>Show Persons</button>
        <Cockpit appTitle={this.props.title} persons={this.state.persons} showPersons={this.state.showPersons} clicked={this.togglePersonsHandler}/>
        {persons}
      </Auxiliary>
    );
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi. I\'m a React App!!!'));
  }
}

export default withClass(App, classes.App);
