import React from 'react';

class TeamShow extends React.Component{
  constructor(props){
    super(props);
    this.changeDescription = this.changeDescription.bind(this);
  }

  componentDidMount(){
    this.props.thunkGetTeam();
  }

  componentDidUpdate(){
    this.props.thunkGetTeam();
  }

  changeDescription(){
    return (e) => (
      this.setState({ description: e.value })
    );
  }

  render(){
    return (
    <div className="home-main">
      {this.props.sidebar}
      <div>
        {this.props.header}
        <div className="TeamShow-main">
         <h3>
           { this.props.name }
         </h3>
         <textarea value={this.props.description}
                   placeholder="Click to add team description..."
                   onChange={this.changeDescription}
           />
        </div>
      </div>
    </div>
     
    )
  }
};

export default TeamShow;