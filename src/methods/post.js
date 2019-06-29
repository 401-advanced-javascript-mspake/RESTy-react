import React from 'react';

class Post extends React.Component {
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
      <input type="radio" onChange={this.handleSelect} checked={this.state.checked} name="method" value="Post"></input>
      <span>POST</span>
    </label>
    );
  }
}

export default Post;
