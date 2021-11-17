import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component{
  constructor(props){
    super(props);
    this.state = { aboutMe: this.props.aboutMe || "",
                 };
    this.saveAboutMe = this.saveAboutMe.bind(this);
  }

  saveAboutMe(){
    
  }

  changeAboutMe(){
    return (e) => {
      this.setState({ aboutMe: e.currentTarget.value });
      // still having an error of leaving off the last character, 
      // but debouncing should fix that, see below:
      //
      // https://davidwalsh.name/javascript-debounce-function
      this.saveAboutMe();
    };
  }
  componentDidMount(){
    // fetch user aboutMe and update state here
    this.props.thunkGetUser().then(
      payload => {
        debugger;
        this.setState({ aboutMe: payload.user.about_me });
      }
    );
  };
  render(){
    return (
      <div>
        <textarea onChange={this.changeAboutMe}
                  value={this.state.aboutMe}
        />
      </div>
      
    );
  }
}
export default UserShow;