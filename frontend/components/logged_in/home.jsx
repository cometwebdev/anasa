import React from 'react';
import SidebarContainer from './sidebar_container';


class Home extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="home-main">
        <SidebarContainer />
        <span>Home</span>
        <button onClick={this.props.logoutUser}>Log Out</button>

      </div>
    );
  }
}

export default Home;