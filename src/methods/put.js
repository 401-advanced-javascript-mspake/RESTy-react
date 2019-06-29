import React from 'react';

class Put extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  handleSelect = (event) => {
    this.setState({ checked: true });
    this.props.saveMethod(event);
  }

  render() {
    return (
      <label>
      <input type="radio" onChange={this.handleSelect} checked={this.state.checked} name="method" value="Put"></input>
      <span>PUT</span>
    </label>
    );
  }
}

export default Put;
