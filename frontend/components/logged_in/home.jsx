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
        <div className="page-main">
          <HomeHeaderContainer title="Home" />
        </div>
      </div>
    );
  }
}

export default Home;