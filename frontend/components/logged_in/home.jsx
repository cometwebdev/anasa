import React from 'react';

class Home extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    debugger;
    return(
      <button onClick={this.props.logoutUser}>Log Out</button>
    );
  }
}

export default Home;