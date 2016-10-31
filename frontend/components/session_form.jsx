import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.update = this.update.bind(this);
  }


  header() {
    if (this.props.typeForm === "signup") {
      return "Sign Up";
    } else if (this.props.typeForm === "login") {
      return "Log In";
    }
  }

  oppositeLink() {
    if (this.props.typeForm === 'signup') {
      return (<Link to="#/login" > Log In </Link>);
    } else if (this.props.typeForm === 'login') {
      return (<Link to="#/signup"> Sign Up</Link>);
    }
  }

  handleSubmit(e){
    debugger
    e.preventDefault();
    this.props.processForm(this.props.formType, this.state);
  }

  update(property){
    return (e) => {
      console.log(property);
      console.log(e);
      console.log(e.target.value);
      this.setState({[property]: e.target.value});
    };
  }



  render() {
    return (
      <div>
        <h1>{this.header()}</h1>
        {this.oppositeLink()}
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input onChange={this.update('username')}/>
          <br />
          <input onChange={this.update('password')}/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
