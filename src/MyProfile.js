import React, { Component } from 'react';
import BusinessCard from './BusinessCard';

class MyProfile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <BusinessCard
          name="Ali Glenesk"
          title="Software engineer"
          links={[
            'http://github.com/aligg',
            'http://linkedin.com/in/aliglenesk',
            'http://twitter.com/aliglenesk'
          ]}
        />
      </div>
    );
  }
}

export default MyProfile;