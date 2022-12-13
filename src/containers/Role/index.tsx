import React, { useState, useEffect } from "react";
import Link from "next/link";
import NewRoleForm from "./newRoleForm";

const RoleContainer = () => {
  // const [showModal, setShowModal] = useState(false);
  // const onClickSetShowModal = function () {
  //   setShowModal(true);
  // };

  const [dataRoles, setDataRoles] = useState<any[]>([]);

  useEffect(() => {
    const accountInfo = JSON.parse(localStorage.getItem("accounts") ?? "{}");
    setDataRoles(accountInfo.roleList);
  }, []);

  return (
    <div id="main-wrapper">
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row page-titles">
            <div className="col-md-5 d-flex align-items-center align-self-center row items-center">
              <h4 className="text-themecolor">Role</h4>
            </div>
            <div className="col-md-7 align-self-center text-right">
              <div className="d-flex justify-content-end align-items-center">
                <button
                  type="button"
                  className="btn btn-info d-none d-lg-block m-l-15"
                  data-toggle="modal"
                  data-target="#responsive-modal"
                  // onClick={onClickSetShowModal}
                >
                  <i className="fa fa-plus-circle"></i> New
                </button>
              </div>
              {/* <NewRoleForm showModal={showModal} setShowModal={setShowModal} /> */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Role name</th>
                          <th>Role description</th>
                          <th>Created by</th>
                          <th>Last modified</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataRoles?.map((data: any, index) => (
                          <tr key={index}>
                            <td>{data.name}</td>
                            <td>{data.roleDescription}</td>
                            <td>{data.createdBy}</td>
                            <td>{data.updatedAt}</td>
                          </tr>
                        ))}
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

export default RoleContainer;
