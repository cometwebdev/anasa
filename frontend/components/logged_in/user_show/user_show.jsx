import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component{
  constructor(props){
    super(props);
    this.state = { aboutMe: this.props.aboutMe || "",
                 };
    this.saveAboutMe = this.saveAboutMe.bind(this);
  }

  saveAboutMe(aboutMe){
    const user = this.props.user;
    user.about_me = aboutMe;
    this.props.thunkUpdateUser(user);
  }

  changeAboutMe(){
    return (e) => {
      this.setState({ aboutMe: e.currentTarget.value });
      // still having an error of leaving off the last character, 
      // but debouncing should fix that, see below:
      //
      // https://davidwalsh.name/javascript-debounce-function
      this.saveAboutMe(e.currentTarget.value);
    };
  }

  componentDidMount(){
    // fetch user aboutMe and update state here
    this.props.thunkGetUser().then(
      payload => {
        this.setState({ 
          aboutMe: payload.user.about_me, 
          email: payload.user.email
        });
      }
    );
  }

  render(){
    return (
    <div className="home-main">
      {this.props.sidebar}
      <div>
        {this.props.header}
        <div className="UserShow-main">
        <h3>
          { this.state.email ?  `${this.state.email}'s Page` : this.props.name }
        </h3>
          <div>
            <textarea onChange={this.changeAboutMe()}
                      value={this.state.aboutMe}
            />
        </div>
      </div>
    </div>
    <Link to={`\\users\\${1}`}>Go to your profile</ Link>
  </div>
)
  }
}
export default UserShow;