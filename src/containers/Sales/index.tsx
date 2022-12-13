const SalesContainer = () => {
  return (
    <div id="main-wrapper">
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Sales</h4>
                  <h6 className="card-subtitle">Add class</h6>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                          <th>Role</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <a href="userdetail">Deshmukh</a>
                          </td>
                          <td>Prohaska</td>
                          <td>@Genelia</td>
                          <td>
                            <span className="label label-danger">admin</span>{" "}
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <a href="userdetail">Deshmukh</a>
                          </td>
                          <td>Gaylord</td>
                          <td>@Ritesh</td>
                          <td>
                            <span className="label label-info">member</span>{" "}
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            <a href="userdetail">Sanghani</a>
                          </td>
                          <td>Gusikowski</td>
                          <td>@Govinda</td>
                          <td>
                            <span className="label label-warning">
                              developer
                            </span>{" "}
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>
                            <a href="userdetail">Roshan</a>
                          </td>
                          <td>Rogahn</td>
                          <td>@Hritik</td>
                          <td>
                            <span className="label label-success">
                              supporter
                            </span>{" "}
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>
                            <a href="userdetail">Joshi</a>
                          </td>
                          <td>Hickle</td>
                          <td>@Maruti</td>
                          <td>
                            <span className="label label-info">member</span>{" "}
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>
                            <a href="userdetail">Nigam</a>
                          </td>
                          <td>Eichmann</td>
                          <td>@Sonu</td>
                          <td>
                            <span className="label label-success">
                              supporter
                            </span>{" "}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">© 2022 CRM Dreamland</footer>
    </div>
  );
};

export default SalesContainer;
