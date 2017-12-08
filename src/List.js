import React, { Component } from 'react';
import ListItem from './ListItem';

const names = ['Ali', 'Bonnie', 'Casey']

class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ListItem
          names={names}
        />
      </div>
    );
  }
}

export default List;