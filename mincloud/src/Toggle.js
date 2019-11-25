import React from 'react';
import './App.css';

class Toggle extends React.Component {

    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
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

export default Toggle