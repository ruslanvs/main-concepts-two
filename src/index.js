import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class Q extends React.Component {
  render() {
    return (
      <div>
        <Welcome name = "Diana" />
        <Welcome name = "Sofiya" />
      </div>
    );
  }
}


// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }
  
// const element = <Welcome name="Sara" />;

ReactDOM.render(<Q />, document.getElementById('root'));
// ReactDOM.render(Q, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
