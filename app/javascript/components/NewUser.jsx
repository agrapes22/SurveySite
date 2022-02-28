import React from "react";
import { Link, withRouter } from "react-router-dom";
import Survey from "../components/Survey";


class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      zipcode: "",
      age: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const url = "/api/v1/user/create";
    const { name, email, zipcode, age } = this.state;

    if (name.length == 0 || email.length == 0 || zipcode.length == 0 || age.length == 0)
      return;

    const body = {
      name,
      email,
      zipcode, 
      age
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
            //response => this.context.history.push('/', response)
            //this.props.history.push("/");
            //this.props.history.push("/");
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
       //.then(this.context.history.push("/Survey"))
       .then(window.location.replace("/Survey-start"))
      .catch(error => console.log(error.message));


      //<Redirect to="/survey" />
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Please provide some details about yourself:
            </h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
                </div>
                <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
                </div>
                <div className="form-group">
                <label htmlFor="zipcode">ZipCode</label>
                <input
                  type="text"
                  name="zipcode"
                  id="zipcode"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
                </div>
                <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="text"
                  name="age"
                  id="age"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
                </div>
                <button type="submit" className="btn custom-button mt-3" href="/">
                Start Survey
              </button>
            </form>
        </div>
    </div>
    </div>
    );
  }
}

export default NewUser;