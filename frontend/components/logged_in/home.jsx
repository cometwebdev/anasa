import React from 'react';
import SidebarContainer from './sidebar_container';
import HomeHeaderContainer from './home_header_container';

class Home extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="home-main">
        <SidebarContainer />
        <HomeHeaderContainer />
      </div>
    );
  }
}

export default Home;