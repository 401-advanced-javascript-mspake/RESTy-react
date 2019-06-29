import React from 'react';
import Get from './methods/get';
import Post from './methods/post';
import Put from './methods/put';
import Patch from './methods/patch';
import Delete from './methods/delete';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  saveMethod = (event) => {
    event.preventDefault();
    const method = event.target.value.toUpperCase();
    console.log(method);
    this.setState({ method });
  }

  saveUrl = (event) => {
    event.preventDefault();
    const url = event.target.value;
    this.setState({ url });
  }

  passData = (event) => {
    event.preventDefault();
    this.props.processForm(this.state.method, this.state.url);
  }

  render() {
    return (
      <>
      <form>
      <section>
        <input type="text" className="wide" name="url" placeholder="URL" onChange={this.saveUrl}></input>
        <div id="methods">
          <Get saveMethod={this.saveMethod} />
          <Post saveMethod={this.saveMethod} />
          <Put saveMethod={this.saveMethod} />
          <Patch saveMethod={this.saveMethod} />
          <Delete saveMethod={this.saveMethod} />
          <label>
            <button type="submit" onClick={this.passData}>Go!</button>
          </label>
        </div>
      </section>

      <section className="col-2">
        <div id="body">
          <textarea name="requestBody" placeholder="Raw JSON Body"></textarea>
        </div>

        <div id="headers">
          <button>Headers</button>
          <div>
            <h2>Basic Authorization</h2>
            <input name="authusername" placeholder="Username"></input>
            <input name="authpassword" placeholder="Password" type="authpassword"></input>
          </div>

          <div>
            <h2>Bearer Token</h2>
            <input type="text" name="authtoken" placeholder="Bearer Token"></input>
          </div>
        </div>
      </section>
    </form>
      </>
    );
  }
}

export default Form;
