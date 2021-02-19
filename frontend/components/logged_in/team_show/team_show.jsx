import React from 'react';

class TeamShow extends React.Component{
  constructor(props){
    super(props);
    this.state = { id: this.props.id,
                   name: this.props.name,
                   description: this.props.description || "",
                   baseDescription: this.props.description || "" };
  }

  componentDidMount(){
    this.props.thunkGetTeam()
    // .then(() => this.setState({description: this.props.description || ""}));
  }


  
  componentDidUpdate(){
    
    // if (this.props.name != this.state.name){
    //   this.setState({name: this.props.name});
    //   this.props.thunkGetTeam()
    //   .then(() => this.setState({description: this.props.description || ""}));
    // }


    if  (this.props.name != this.state.name){
      if (this.state.name != "Loading Team Name..."
          && this.state.description != this.state.baseDescription){
        this.props.thunkUpdateTeam(
          {
            id: this.state.id,
            name: this.state.name,
            description: this.state.description
          }
        );
      }
      this.setState({id: this.props.id})
      this.setState({name: this.props.name});
      this.setState({description: this.props.description || ""})
      this.setState({baseDescription: this.props.baseDescription || ""})
      this.props.thunkGetTeam();
    }
    else if (this.props.description && this.props.description!= this.state.baseDescription){
      this.setState({description: this.props.description || ""})
      this.setState({baseDescription: this.props.description || ""})
    }
  }

  componentWillUnmount(){
    this.props.thunkUpdateTeam(
      {
        id: this.props.id,
        name: this.props.name,
        description: this.state.description
      }
    );
  }

  changeDescription(){
    return (e) => (
      this.setState({ description: e.currentTarget.value })
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
          <textarea value={this.state.description}
                    placeholder="Click to add team description..."
                    onChange={this.changeDescription()}
                    cols="50"
                    rows="30"
            />
          </div>
        </div>
      </div>
    )
  }
};

export default TeamShow;