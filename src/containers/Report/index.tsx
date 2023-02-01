import React from "react";

const ReportContainer: React.FC = () => {
  return (
    <div id="main-wrapper">
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="text-themecolor">Projects</h4>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Report name</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="/report/test">Total call by sales</a>
                          </td>
                          <td>An overview of calls made by sales</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="/report/test">Total call by sales</a>
                          </td>
                          <td>An overview of calls made by sales</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="/report/test">Total call by sales</a>
                          </td>
                          <td>An overview of calls made by sales</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="/report/test">Total call by sales</a>
                          </td>
                          <td>An overview of calls made by sales</td>
                        </tr>
                      </tbody>
                    </table>
                    {/* <Paginate
                      total={leads?.totalItems}
                      pageSize={leads?.pageSize}
                      pageIndex={leads?.pageIndex}
                      onChange={handlePaginate}
                    /> */}
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

export default ReportContainer;
