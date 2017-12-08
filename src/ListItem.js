import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {animal: '^..^'}
  }
  render() {
    return (
      <div>
      <h1> {this.state.animal} </h1>
        {this.props.names.map(name => <li>{name}</li>)}
      </div>

    );
  }
}

export default ListItem;