import React from "react";
import Tree from "../../components/Tree";
import { mockTreeData } from "./mock-data";

const GroupHiierachy: React.FC = () => {
  return (
    <div id="main-wrapper">
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row page-titles">
            <div className="col-md-5 align-self-center row items-center">
              <h4 className="text-themecolor">Group Hiierachy</h4>
            </div>
            <div className="col-md-7 align-self-center text-right">
              <div className="d-flex justify-content-end align-items-center">
                <button
                  type="button"
                  className="btn btn-info d-none d-lg-block m-l-15"
                >
                  <i className="fa fa-plus-circle"></i> Expand
                </button>
                <button
                  type="button"
                  className="btn btn-info d-none d-lg-block m-l-15"
                >
                  <i className="fa fa-plus-circle"></i> Collapse
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <Tree data={mockTreeData} />
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

export default GroupHiierachy;
