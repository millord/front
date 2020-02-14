import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label" for="name">
              Name
            </label>
            <div className="col-sm-9">
              <input type="email" className="form-control" id="name" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label" for="email">
              Email
            </label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="email" />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-form-label" for="password1">
              Password
            </label>
            <div className="col-sm-9">
              <input type="password" className="form-control" id="password1" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label" for="password2">
              Confirm Your Password
            </label>
            <div className="col-sm-9">
              <input type="password" className="form-control" id="password2" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-9 offset-sm-3">
              <button className="btn btn-primary" type="submit">
                Login Now
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
