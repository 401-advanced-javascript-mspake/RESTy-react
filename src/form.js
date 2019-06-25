import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  saveMethod = (event) => {
    event.preventDefault();
    const method = event.target.value.toUpperCase();
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
        <input type="text" name="url" placeholder="URL" onChange={this.saveUrl}></input>
        <div id="methods">
        <label>
            <input type="radio" onClick={this.saveMethod} name="method" value="get"></input>
            <span>GET</span>
          </label>
          <label>
            <input type="radio" onClick={this.saveMethod} name="method" value="post"></input>
            <span>POST</span>
          </label>
          <label>
            <input type="radio" onClick={this.saveMethod} name="method" value="put"></input>
            <span>PUT</span>
          </label>
          <label>
            <input type="radio" onClick={this.saveMethod} name="method" value="patch"></input>
            <span>PATCH</span>
          </label>
          <label>
            <input type="radio" onClick={this.saveMethod} name="method" value="delete"></input>
            <span>DELETE</span>
          </label>
          <label>
            <button type="submit" onClick={this.passData}>Go!</button>
          </label>
        </div>
      </section>

      <section>
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
