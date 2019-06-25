import React from 'react';

class JSONSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderResults: false,
    };
  }

  showResults = () => {

  }

  render() {
    let body;
    if (this.props.results) {
      body = this.props.results;
      this.setState({ renderResults: true });
    }
    if (this.state.renderResults) {
      return (
      <section id="json">
        <ul>
          {body.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </section>
      );
    } 
    return (
      <section id="json">
        <p>{'{}'}</p>
      </section>
    );
  }
}

export default JSONSection;
