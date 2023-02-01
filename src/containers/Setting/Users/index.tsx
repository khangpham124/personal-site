import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Paginate from "../../../components/Paginate";
// import { LEAD_STATUSES, LEAD_SOURCES } from "./constants";
import Modal from "../../../components/ModalCreate";
import InputField from "../../../components/ModalCreate/InputField";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import SelectField from "../../../components/ModalCreate/SelectField";
import { TRootState } from "src/state-management/reducers";
import { fetchLeadsAction, uiActions } from "src/state-management/actions";
import { EPaginate } from "utils/types";
import { ELeadsActions } from "src/state-management/actions/leads/constants";
import { createLeadAction } from "src/state-management/actions/leads";
import { ReactMultiEmail } from "react-multi-email";
import "react-multi-email/style.css";
import toastr from "toastr";
import { usersAPI } from "../../../services/identity/users";
import Cookies from "js-cookie";
import { companyAPI } from "../../../services/identity/company";
import Select from "react-select";

const servicesCompanyAPI = new companyAPI();
const servicesUsersAPI = new usersAPI();
const UsersContainer: React.FC = () => {
  const dispatch = useDispatch();
  const leads = useSelector((state: TRootState) => state.leads.data);

  const [isShowModalRemoveUser, setIsShowModalRemoveUser] = useState({
    isShow: false,
    id: "",
    email: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(EPaginate.DEFAULT_PAGE_INDEX);
  const [emails, setEmails] = React.useState<any[]>([]);

  const [listUsers, setListUsers] = useState<any[]>([]);
  const [showResults, setShowInputEmails] = React.useState(false);
  const [employeeCount, setEmployeeCount] = useState(0);
  const [userAssigned, setUserAssigned] = useState("");

  const fetchLeads = (
    pageIndex: number,
    pageSize: number,
    companyId: string
  ) => {
    dispatch(fetchLeadsAction.request(pageIndex, pageSize, companyId));
  };

  const accountInfo = JSON.parse(localStorage.getItem("accounts") ?? "{}");
  const companyID = String(Cookies.get("companyID"));
  const companyName = String(Cookies.get("companyName"));
  const companyNameString = String(Cookies.get("companyNameString"));

  useEffect(() => {
    fetchLeads(
      EPaginate.DEFAULT_PAGE_INDEX,
      EPaginate.COMMON_PAGE_SIZE,
      companyID
    );
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(uiActions.resetActionStatus(ELeadsActions.FETCH_LEADS));
      dispatch(uiActions.resetActionStatus(ELeadsActions.CREATE_LEAD));
    };
  }, [dispatch]);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = function () {
    servicesCompanyAPI.getDetailCompany(companyID).then((items) => {
      setListUsers(items.data?.items);
      setEmployeeCount(items.data?.items.length);
    });
  };

  const onClickSetShowModal = function () {
    setShowModal(true);
    setEmails([]);
    setShowInputEmails(true);
  };

  const onSubmitAddUser = function () {
    const roleID = accountInfo.roleList
      .filter((role: any) => role.name === "sale")
      .map((rolename: any) => rolename.id);

    const body = {
      companyId: companyID,
      emails: emails,
      roleId: roleID[0],
      invitedUserUuid: accountInfo.uuid,
    };

    servicesUsersAPI
      .inviteNewUser(body)
      .then((res) => {
        console.log(res);
        toastr.success("Invitation sent");
        setShowModal(false);
      })
      .catch(function (error) {
        toastr.success("Something went wrong");
      });
  };

  const removeUser = function (id: string) {
    const body = {
      assignedUserUuid: userAssigned,
    };
    servicesUsersAPI
      .removeUser(id, body)
      .then((res) => {
        toastr.success("Remove user ");
        setIsShowModalRemoveUser({
          ...isShowModalRemoveUser,
          isShow: false,
          id: "",
        });
        fetchUser();
      })
      .catch(function (error) {
        toastr.success("Something went wrong");
      });
  };

  const listUsersExcude = listUsers
    .filter((item: any) => item.user?.id !== isShowModalRemoveUser.id)
    .map((item: any) => ({
      value: item.user?.id,
      label: `${item.user?.firstName !== null ? item.user?.firstName : ``} ${
        item.user?.lastName !== null ? item.user?.lastName : ``
      }`,
    }));

  const defaultOwner = listUsers
    .filter((item: any) => item.role.name === "owner")
    .map((item: any) => ({
      value: item.user?.id,
      label: `${item.user?.firstName !== "" ? item.user?.firstName : ``} ${
        item.user?.lastName !== "" ? item.user?.lastName : ``
      }`,
    }));

  console.log(isShowModalRemoveUser);

  return (
    <div id="main-wrapper">
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row page-titles">
            <div className="col-md-5 d-flex align-items-center align-self-center row items-center">
              <h4 className="text-themecolor">All users</h4>
              <div className="col-md-5">
                <select className="select2 form-control custom-select">
                  <option>All users</option>
                  <optgroup label="Alaskan/Hawaiian Time Zone">
                    <option value="AK">Alaska</option>
                  </optgroup>
                  <optgroup label="Pacific Time Zone">
                    <option value="CA">California</option>
                  </optgroup>
                </select>
              </div>
            </div>
            <div className="col-md-7 align-self-center text-right">
              <div className="d-flex justify-content-end align-items-center">
                <button
                  type="button"
                  className="btn btn-info d-none d-lg-block m-l-15"
                >
                  <i className="fa fa-plus-circle"></i> Export
                </button>
                <button
                  type="button"
                  className="btn btn-info d-none d-lg-block m-l-15"
                >
                  <i className="fa fa-plus-circle"></i> Filter
                </button>
                <button
                  type="button"
                  className="btn btn-info d-none d-lg-block m-l-15"
                  data-toggle="modal"
                  data-target="#responsive-modal"
                  onClick={onClickSetShowModal}
                >
                  <i className="fa fa-plus-circle"></i> Create New
                </button>
              </div>
              <Modal
                isOpen={showModal}
                onRequestClose={() => setShowModal(false)}
                modal_name="ADD A NEW USER"
                label="Name"
              >
                {showResults ? (
                  <div id="inputUserEmail">
                    <div className="row">
                      <div className="col-12">
                        <label className="font-weight-normal">Email:</label>
                        <ReactMultiEmail
                          placeholder="e.g. vanminhtri@gmail.com; ngocton@gmail.com"
                          emails={emails}
                          onChange={(_emails: string[]) => {
                            setEmails(_emails);
                          }}
                          getLabel={(
                            email: string,
                            index: number,
                            removeEmail: (index: number) => void
                          ) => {
                            return (
                              <div data-tag key={index}>
                                {email}
                                <span
                                  data-tag-handle
                                  onClick={() => removeEmail(index)}
                                >
                                  ×
                                </span>
                              </div>
                            );
                          }}
                        />
                        <i>
                          You can invite many users at one time by using ";"
                          between the emails.
                        </i>
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <button
                        className="btn btn-dark"
                        type="reset"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="btn btn-danger ml-3"
                        type="submit"
                        onClick={onSubmitAddUser}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="text-center font-weight-normal">
                      Invitations have been sent to the users' emails
                    </p>
                    <div className="text-center mt-3">
                      <button
                        className="btn btn-danger ml-3"
                        type="submit"
                        onClick={() => setShowModal(false)}
                      >
                        Done
                      </button>
                    </div>
                  </div>
                )}
              </Modal>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-subtitle">{employeeCount} items</h6>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>User name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Report to</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {listUsers?.map((user, index) => (
                          <tr key={user.uuid}>
                            <td>{index + 1}</td>
                            <td>
                              {user?.user?.id !== undefined ? (
                                <a
                                  href={`${`/${companyName}/setting/users/${user?.user?.id}`}`}
                                >
                                  {user.user?.username
                                    ? user.user?.username
                                    : user.invitedEmail}
                                </a>
                              ) : (
                                <p>
                                  {user.user?.username
                                    ? user.user?.username
                                    : user.invitedEmail}
                                </p>
                              )}
                            </td>
                            <td>
                              {user.user?.email
                                ? user.user?.email
                                : user.invitedEmail}
                            </td>
                            <td>{user.user?.phone}</td>
                            <td>
                              {user.reportTo?.firstName}
                              {user.reportTo?.lastName}
                            </td>
                            <td>
                              {user.isConfirmed === true ? `Active` : `Pending`}
                            </td>
                            <td>
                              <button
                                className="btn btn-outline-secondary"
                                onClick={() =>
                                  setIsShowModalRemoveUser({
                                    isShow: true,
                                    id: user?.id,
                                    email: user.user?.email,
                                  })
                                }
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        ))}
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

      {/* Modal Remove User */}
      <Modal
        isOpen={isShowModalRemoveUser.isShow}
        onRequestClose={() =>
          setIsShowModalRemoveUser({ ...isShowModalRemoveUser, isShow: false })
        }
        modal_name="REMOVE USER"
        label="Name"
      >
        <div>
          You are about to remove <strong>{isShowModalRemoveUser.email}</strong>{" "}
          from <strong>{companyNameString} Comnpany</strong>.
        </div>
        <Select
          options={listUsersExcude}
          className="mt-4"
          onChange={(e: any) => {
            setUserAssigned(e.value);
          }}
          defaultValue={defaultOwner}
        />

        <div className="text-center mt-3">
          <button
            className="btn btn-dark"
            type="reset"
            onClick={() =>
              setIsShowModalRemoveUser({
                ...isShowModalRemoveUser,
                isShow: false,
                id: "",
              })
            }
          >
            Cancel
          </button>
          <button
            className="btn btn-danger ml-3"
            onClick={() => removeUser(isShowModalRemoveUser.id)}
          >
            Remove
          </button>
        </div>
      </Modal>
      {/* End of Modal Remove User */}
      <footer className="footer">© 2022 CRM Dreamland</footer>
    </div>
  );
};

export default UsersContainer;
