import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="home-sidebar">
        <div className="home-sidebar-header">
            <Link to="/home" className="home-logo-container">
              <div className="home-logo">
                <h5>anasa</h5>
              </div>
            </Link>
        </div>
      </div>
    )
  }
};

export default Sidebar;