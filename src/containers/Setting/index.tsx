import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { usersAPI } from "../../services/identity/users";
import { ItemsUser, IUserDetailInCompany } from "services/identity/users/types";

const SettingContainer: React.FC = () => {
  const servicesUsersAPI = new usersAPI();
  const accountInfo = JSON.parse(localStorage.getItem("accounts") ?? "{}");
  const roleAcc = accountInfo.roles;
  const companyID = Cookies.get("companyID");
  const [userDetail, setUserdetail] = useState<IUserDetailInCompany>();
  const roleOwn = accountInfo.roleList
    .filter((item: any) => item.name === "owner")
    .map((role: any) => role.id);

  const isOwner = accountInfo.roles
    .filter((item: any) => item.roleId === roleOwn[0])
    .map((role: any) => role.id);
  useEffect(() => {
    if (accountInfo.uuid && companyID) {
      servicesUsersAPI
        .getUserDetailInCompanyByID(accountInfo.uuid, companyID)
        .then((data) => {
          if (data) {
            setUserdetail(data);
          }
          // setFirstName(res.data?.firstName);
          // setLastName(res.data?.lastName);
          // setEmailUser(res.data?.email);
          // setReportToLabel(res.data?.roles[0]?.reportToUser);
          // setReportToValue(res.data?.roles[0]?.reportToUserUuid);
          // setIDUserDetail(res.data?.id);
          // setFirstName(res.data?.firstName);
          // setLastName(res.data?.lastName);

          // setPhonelUser(res.data?.phoneNumber);
          // setAdddBy(res.data?.roles[0]?.invitedByUser?.email);
          // setAddDate(res.data?.invitedBy?.createdAt);
          // res.data?.roles
          //   .filter((role: any) => role.companyId === companyID)
          //   .map((roleUser: any) => {
          //     setRoleUser(roleUser.role.name);
          //   });
        })
        .catch((error) => console.error(error));
    }
  }, []);

  console.log(userDetail);
  return (
    <div id="main-wrapper">
      <div className="page-wrapper">
        <div className="container-fluid card">
          <div className="card-body">
            <h4 className="text-themecolor">Personal Settings</h4>
            <form className="form-horizontal form-material mt-4">
              <div className="form-group">
                <label className="col-md-12">Fist Name</label>
                <div className="col-md-12">
                  <input
                    type="text"
                    placeholder="Fist name..."
                    className="form-control form-control-line"
                    value={userDetail?.user?.firstName ?? ""}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12">Last Name</label>
                <div className="col-md-12">
                  <input
                    type="text"
                    placeholder="Last name..."
                    className="form-control form-control-line"
                    value={userDetail?.user?.lastName ?? ""}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12">Email</label>
                <div className="col-md-12">
                  <input
                    type="email"
                    placeholder="Email..."
                    className="form-control form-control-line"
                    name="example-email"
                    id="example-email"
                    value={userDetail?.user?.email ?? ""}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12">Role</label>
                <div className="col-md-12">
                  <input
                    type="text"
                    placeholder="Role..."
                    className="form-control form-control-line"
                    value={userDetail?.role?.name ?? ""}
                  />
                </div>
              </div>

              {isOwner.length === 0 ? (
                <div>
                  <div className="form-group">
                    <label className="col-md-12">Report to</label>
                    <div className="col-md-12">
                      <input
                        type="text"
                        placeholder="Report to..."
                        className="form-control form-control-line"
                        value={
                          userDetail?.reportToUser !== null
                            ? String(userDetail?.reportToUser.username)
                            : ""
                        }
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-12">Phone</label>
                    <div className="col-md-12">
                      <input
                        type="text"
                        placeholder="Phone..."
                        className="form-control form-control-line"
                        value={userDetail?.phone ?? ""}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-12">Added by</label>
                    <div className="col-md-12">
                      <input
                        type="text"
                        placeholder="Added by..."
                        className="form-control form-control-line"
                        value={
                          `${
                            userDetail?.invitedByUser?.firstName !== null
                              ? userDetail?.invitedByUser?.firstName
                              : ``
                          } ${
                            userDetail?.invitedByUser?.lastName !== null
                              ? userDetail?.invitedByUser?.lastName
                              : ``
                          }` ?? ""
                        }
                      />
                    </div>
                  </div>
                </div>
              ) : null}

              {/* <div className="form-group">
                <label className="col-sm-12">Select Country</label>
                <div className="col-sm-12">
                  <select className="form-control form-control-line">
                    <option>London</option>
                    <option>India</option>
                    <option>Usa</option>
                    <option>Canada</option>
                    <option>Thailand</option>
                  </select>
                </div>
              </div> */}
              {/* <div className="form-group">
                <div className="col-sm-12">
                  <button className="btn btn-success">Update Profile</button>
                </div>
              </div> */}
            </form>
          </div>
        </div>
      </div>

      <footer className="footer">© 2022 CRM Dreamland</footer>
    </div>
  );
};

export default SettingContainer;
