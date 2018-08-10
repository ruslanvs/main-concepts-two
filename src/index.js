import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

{// Conditional rendering
  class UserGreeting extends React.Component {
    render() {
      return (
        <h1>Welcome back!</h1>
      );
    }
  }
  
  class GuestGreeting extends React.Component {
    render() {
      return (
        <h1>Please sign up</h1>
      );
    }
  }

  class Greeting extends React.Component {
    constructor(props) {
      super(props);
      this.isLoggedIn = props.isLoggedIn;
    }

    render() {
      const Value = this.isLoggedIn ? UserGreeting : GuestGreeting
      return <Value />
    }
  }

  ReactDOM.render(
    <Greeting isLoggedIn={false}/>,
    document.getElementById('root')
  )

}

/*
{
  class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  
  ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
  );
}

/*
{ // Nice basics
  class Hello extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
  
  class Hellos extends React.Component {
    render() {
      return (
        <div>
          <Hello name = "Diana" />
          <Hello name = "Sofiya" />
        </div>
      );
    }
  }
  ReactDOM.render(<Hellos />, document.getElementById('root'));
}

{// Encapsulated clock
  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      })
    }
    
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  ReactDOM.render(<Clock />, document.getElementById('root'));
}

// ReactDOM.render(<App />, document.getElementById('root'));
*/
registerServiceWorker();
