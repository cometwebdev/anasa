import React from 'react';


class HomeHeader extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="home-header">
        <div className="home-header-main">
          <span className="home-header-title">Home</span>
        </div>
        <div className="home-header-buttons">
          <button onClick={this.props.logoutUser}
                  className="home-header-logout"
          >
            Log Out
          </button>
        </div>
      </div>
    )
  }
};

export default HomeHeader;