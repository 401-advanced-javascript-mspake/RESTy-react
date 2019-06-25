import React from 'react';
import superagent from 'superagent';

import Form from './form';
import JSONSection from './json';
import Aside from './aside';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  processForm = (method, url, body, auth) => {
    console.log(method, url);
    superagent(method, url).then((result) => {
      let results = JSON.stringify(result.body);
      results = results.split(',');
      console.log(results);
      this.setState({ results });
    });
  }

  render() {
    return (
      <main>
      <Aside />
      <section id="right-side">
        <Form processForm={this.processForm} />
        <JSONSection result={ this.state.results } />
      </section>
      </main>
    );
  }
}

export default Main;
