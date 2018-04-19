import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside Constructor', props);
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() { //Try to avoid
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[Persons.js] Inside componentDidMount()');
    this.lastPersonRef.current.focus();
  }

  componentWillReceiveProps(nextProps){ //Try to avoid
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextProps.persons !== this.props.persons;
  // }

  componentWillUpdate(nextProps, nextState){ //Try to avoid
    console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[UPDATE Persons.js] Inside componentDidUpdate');
  }

  render() {

    console.log('[Persons.js] Insider render()');

    return this.props.persons.map((person, index) => {
        return <Person
                  click={() => this.props.clicked(index)}
                  name={person.name}
                  position={index}
                  age={person.age}
                  ref={this.lastPersonRef}
                  key={index}
                  changed={(event) => this.props.changed(event, person.id)}/>
    });
  }
}

export default Persons;
