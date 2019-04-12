import React from 'react';
import { withRouter } from 'react-router';
import './index.scss';

@withRouter
class Home extends React.Component{
  render () {
    return (
      <div className="home-container">
        <div
          onClick={() => {
            const { history } = this.props;
            history.push('/config');
          }}
        >
          123
        </div>
      </div>
    );
  }
}

export default Home;