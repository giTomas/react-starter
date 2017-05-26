import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
// import R from 'ramda';
import Hello from './components/hello';
// import styled from 'styled-components';

// const App = () =>
//   <Hello>Hello New App!!</Hello>;

const Hi = () => <Hello>Hello New App!!</Hello>;
const He = () => <Hello>Hello User!!</Hello>;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  render() {
    // return <Hello>Hello New App!!</Hello>;
    return (
      <Router>
        <div>
          <Link to="/">Hello</Link>
          <Link to="/about">About</Link>
          <hr />


          <Route exact path="/" component={Hi} />
          <Route path="/about" component={He} />

          <div>Footer</div>
        </div>
      </Router>
    );
  }
}

export default App;
