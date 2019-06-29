import React from 'react';
import superagent from 'superagent';
import ReactJson from 'react-json-view';

import Form from './form';
// import JSONSection from './json';
import Aside from './aside';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      history: [],
    };
  }

  processForm = (method, url, body, auth) => {
    console.log(method, url);
    this.setState({ history: [...this.state.history, url] });
    superagent(method, url).then((results) => {
      this.setState({ results });
    });
  }

  render() {
    return (
      <main>
      <Aside history={this.state.history} />
      <section id="right-side">
        <Form processForm={this.processForm} />
        <div id="json">
          <ReactJson src={this.state.results} />
        </div>
      </section>
      </main>
    );
  }
}

export default Main;
