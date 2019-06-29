import React from 'react';

class Aside extends React.Component {
  render() {
    return (
      <aside>
      <h2>History</h2>
      <ul>
        {this.props.history.map((entry, i) => {
          return (<li key={`history-${i}`}>{entry}</li>);
        })}
      </ul>
    </aside>
    );
  }
}

export default Aside;
