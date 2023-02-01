import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReportContainerDetail: React.FC = () => {
  return (
    <div id="main-wrapper">
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-subtitle d-flex align-items-center">
                    <a href="" className="mr-4">
                      <i className="ti-angle-left"></i>
                    </a>
                    Report Total calls by sales
                  </h3>

                  <div className="d-flex mt-5">
                    <div className="w-20 d-flex align-items-center">
                      <h5 className="fw-bold mr-4">From</h5>
                      <DatePicker
                        dateFormat="dd/MM/yyyy"
                        onChange={(date) => {
                          console.log(date);
                        }}
                      />
                    </div>
                    <div className="w-20 d-flex align-items-center">
                      <h5 className="fw-bold mr-4">To</h5>
                      <DatePicker
                        dateFormat="dd/MM/yyyy"
                        onChange={(date) => {
                          console.log(date);
                        }}
                      />
                    </div>
                    <div className="w-20 d-flex align-items-center">
                      <h5 className="fw-bold mr-4">Sales</h5>
                      <select className="select2 form-control custom-select">
                        <option>All Open Leads</option>
                        <optgroup label="Alaskan/Hawaiian Time Zone">
                          <option value="AK">Alaska</option>
                          <option value="HI">Hawaii</option>
                        </optgroup>
                      </select>
                    </div>
                    <div className="w-20 d-flex align-items-center ml-5">
                      <input type="checkbox" className="custom-control-input" />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck"
                      >
                        <span>Including thethe subordiantes</span>
                      </label>
                    </div>
                  </div>
                  <div className="table-responsive mt-4">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Report name</th>
                          <th>Call duration</th>
                          <th>Note</th>
                          <th>Target</th>
                          <th>Target type</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Total call by sales</td>
                          <td>10m</td>
                          <td>An overview of calls made by sales</td>
                          <td>An overview of calls made by sales</td>
                          <td>An overview of calls made by sales</td>
                        </tr>

                        <tr>
                          <td>Total call by sales</td>
                          <td>10m</td>
                          <td>An overview of calls made by sales</td>
                          <td>An overview of calls made by sales</td>
                          <td>An overview of calls made by sales</td>
                        </tr>

                        <tr>
                          <td>Total call by sales</td>
                          <td>10m</td>
                          <td>An overview of calls made by sales</td>
                          <td>An overview of calls made by sales</td>
                          <td>An overview of calls made by sales</td>
                        </tr>

                        <tr>
                          <td>Total call by sales</td>
                          <td>10m</td>
                          <td>An overview of calls made by sales</td>
                          <td>An overview of calls made by sales</td>
                          <td>An overview of calls made by sales</td>
                        </tr>

                        <tr>
                          <td>Total call by sales</td>
                          <td>10m</td>
                          <td>An overview of calls made by sales</td>
                          <td>An overview of calls made by sales</td>
                          <td>An overview of calls made by sales</td>
                        </tr>

                        <tr>
                          <td>Total call by sales</td>
                          <td>10m</td>
                          <td>An overview of calls made by sales</td>
                          <td>An overview of calls made by sales</td>
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

export default ReportContainerDetail;
