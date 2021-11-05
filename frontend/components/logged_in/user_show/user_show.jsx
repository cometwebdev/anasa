import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component{
  constructor(props){
    super(props);
    this.state = { description: this.props.description || "",
                 };
    this.saveDescription = this.saveDescription.bind(this);
  }

  saveDescription(){
    
  }

  changeDescription(){
    return (e) => {
      this.setState({ description: e.currentTarget.value });
      // still having an error of leaving off the last character, 
      // but debouncing should fix that, see below:
      //
      // https://davidwalsh.name/javascript-debounce-function
      this.saveDescription();
    };
  }
  componentDidMount(){};
  render(){
    return (
      <div>
        <textarea onChange={this.changeDescription}
                  value={this.state.description}
        />
      </div>
      
    );
  }
}
export default UserShow;