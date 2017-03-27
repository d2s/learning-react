import React, { Component } from 'react';
import Header from './components/Header'
import Avatar from './components/Avatar'

/**
 * Combine firstName and lastName together
 * 
 * @param {any} user 
 * @returns string
 */
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

/**
 * User details
 */
const user = {
  firstName: 'Daniel',
  lastName: 'Schildt',
  country: 'Finland'
};

/**
 * React application’s App container
 * 
 * @class App
 * @extends {Component}
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Avatar
          name={formatName(user)}
          country={user.country}
        />
      </div>
    );
  }
}

export default App;
