import React from 'react';
import SidebarContainer from './sidebar/sidebar_container';
import HomeHeaderContainer from './header/home_header_container';

class Home extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="home-main">
        <SidebarContainer />
        <HomeHeaderContainer title="Home" />
      </div>
    );
  }
}

export default Home;