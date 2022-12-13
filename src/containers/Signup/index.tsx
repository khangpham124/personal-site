const SignUpContainer = () => {
  return (
    <section id="wrapper">
      <div className="login-register">
        <div className="login-box card">
          <div className="card-body">
            <form
              className="form-horizontal form-material"
              id="loginform"
              // action="/dashboard"
            >
              <h3 className="text-center m-b-20">Sign In</h3>
              <div className="form-group ">
                <div className="col-xs-12">
                  <input
                    className="form-control"
                    type="text"
                    required
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-12">
                  <input
                    className="form-control"
                    type="password"
                    required
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <div className="d-flex no-block align-items-center">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label className="custom-control-label">
                        Remember me
                      </label>
                    </div>
                    <div className="ml-auto">
                      <a href="" id="to-recover" className="text-muted">
                        <i className="fas fa-lock m-r-5"></i> Forgot pwd?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group text-center">
                <div className="col-xs-12 p-b-20">
                  <button
                    className="btn btn-block btn-lg btn-info btn-rounded"
                    type="submit"
                  >
                    Log In
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                  <div className="social">
                    <button
                      className="btn  btn-facebook"
                      data-toggle="tooltip"
                      title="Login with Facebook"
                    >
                      <i aria-hidden="true" className="fab fa-facebook-f"></i>
                    </button>
                    <button
                      className="btn btn-googleplus"
                      data-toggle="tooltip"
                      title="Login with Google"
                    >
                      <i
                        aria-hidden="true"
                        className="fab fa-google-plus-g"
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="form-group m-b-0">
                <div className="col-sm-12 text-center">
                  Don't have an account?
                  <a href="pages-register.html" className="text-info m-l-5">
                    <b>Sign Up</b>
                  </a>
                </div>
              </div>
            </form>
            <form
              className="form-horizontal"
              id="recoverform"
              action="index.html"
            >
              <div className="form-group ">
                <div className="col-xs-12">
                  <h3>Recover Password</h3>
                  <p className="text-muted">
                    Enter your Email and instructions will be sent to you!
                  </p>
                </div>
              </div>
              <div className="form-group ">
                <div className="col-xs-12">
                  <input
                    className="form-control"
                    type="text"
                    required
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-group text-center m-t-20">
                <div className="col-xs-12">
                  <button
                    className="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light"
                    type="submit"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpContainer;
