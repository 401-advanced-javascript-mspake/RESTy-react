import React from 'react';

class Get extends React.Component {
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
      <input type="radio" onChange={this.handleSelect} checked={this.state.checked} name="method" value="get"></input>
      <span>GET</span>
    </label>
    );
  }
}

export default Get;
