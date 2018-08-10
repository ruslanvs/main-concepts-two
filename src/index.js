import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

{

  function LoginButton(props) {
    return (
      <button onClick={props.onClick}>Login</button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>Logout</button>
    );
  }
  
  class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
  
      if(isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      )
    }
  }

  ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
  )
// }

// {// Conditional rendering
  // class UserGreeting extends React.Component {
  //   render() {
  //     return (
  //       <h1>Welcome back!</h1>
  //     );
  //   }
  // }
  
  // class GuestGreeting extends React.Component {
  //   render() {
  //     return (
  //       <h1>Please sign up</h1>
  //     );
  //   }
  // }

  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

  // class Greeting extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.isLoggedIn = props.isLoggedIn;
  //   }

  //   render() {
  //     const Value = this.isLoggedIn ? UserGreeting : GuestGreeting
  //     return <Value />
  //   }
  // }

  // ReactDOM.render(
  //   <Greeting isLoggedIn={false}/>,
  //   document.getElementById('root')
  // )

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
