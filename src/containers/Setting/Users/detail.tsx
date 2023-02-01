import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { usersAPI } from "../../../services/identity/users";
import { companyAPI } from "../../../services/identity/company";
import toastr from "toastr";
import Select from "react-select";
import Cookies from "js-cookie";

const servicesUsersAPI = new usersAPI();
const servicesCompanyAPI = new companyAPI();
const DetailUserContainer: React.FC = () => {
  const router = useRouter();
  const companyID = String(Cookies.get("companyID"));
  const companyName = String(Cookies.get("companyName"));
  const { userDetail: userID } = router.query;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [phonelUser, setPhonelUser] = useState("");
  const [roleUser, setRoleUser] = useState("");
  const [reportToLabel, setReportToLabel] = useState("");
  const [reportToValue, setReportToValue] = useState("");
  const [phoneUser, setPhoneUser] = useState("");
  const [adddBy, setAdddBy] = useState("");
  const [addDate, setAddDate] = useState("");
  const [listReport, setListReport] = useState<any[]>([]);
  const [reporterTo, setReporterTo] = useState({
    value: "",
    label: "",
  });
  const [IDUserDetail, setIDUserDetail] = useState("");
  // console.log(IDUserDetail);

  const currrentURL = window.location.href;
  const detailUserUrl = currrentURL.split("/");
  const getUserID = detailUserUrl.slice(-1);

  useEffect(() => {
    servicesUsersAPI.getDetailUser(getUserID).then((res) => {
      setReportToLabel(res.data?.roles[0]?.reportToUser);
      setReportToValue(res.data?.roles[0]?.reportToUserUuid);

      setIDUserDetail(res.data?.id);
      setFirstName(res.data?.firstName);
      setLastName(res.data?.lastName);
      setEmailUser(res.data?.email);
      setPhonelUser(res.data?.phoneNumber);

      setAdddBy(res.data?.roles[0]?.invitedByUser?.email);
      setAddDate(res.data?.invitedBy?.createdAt);

      res.data?.roles
        .filter((role: any) => role.companyId === companyID)
        .map((roleUser: any) => {
          setRoleUser(roleUser.role.name);
        });
    });
  }, [userID]);

  useEffect(() => {
    servicesCompanyAPI.getDetailCompany(String(companyID)).then((items) => {
      const listReport = items.data.items
        .filter((user: any) => user.user?.id !== getUserID[0])
        .map((item: any) => ({
          value: item.user?.id,
          label:
            item.user?.firstName !== null
              ? item.user?.firstName
              : "" + " " + item.user?.lastName !== null
              ? item.user?.firstlastNameName
              : "",
        }));
      setListReport(listReport);
    });
    const selectReproter = listReport
      .filter((item) => item.value === reportToValue)
      .map((item: any) => ({
        value: item.value,
        label: item.label,
      }));
    setReporterTo(selectReproter[0]);
  }, []);

  const onChangeReporTo = function (value: any) {
    let reportTo = {
      reportToUserUuid: value.value,
    };
    servicesUsersAPI
      .updateUserDetail(IDUserDetail, companyID, reportTo)
      .then((res) => {
        toastr.success("Update successfully");
        setTimeout(() => {
          window.location.reload();
        }, 0);
      })
      .catch(function (error) {
        toastr.success("Something went wrong");
      });
  };

  const selectReproter = listReport
    .filter((item) => item.value === reportToValue)
    .map((item: any) => ({
      value: item.value,
      label: item.label,
    }));

  return (
    <div id="main-wrapper">
      <div className="page-wrapper">
        <div className="container-fluid card tab-content">
          <div className="d-flex align-items-center items-center py-3">
            <div className="w-50 d-flex">
              <Link href={`/${companyName}/setting/users`}>
                <i className="fas fa-arrow-left"></i>
              </Link>

              <div className="p-l-10">
                <h4 className="text-themecolor font-medium">
                  {firstName} {lastName}
                </h4>
                <p className="text-black-50">{roleUser} at Dreamland</p>
              </div>
            </div>
            <div className="w-50 text-right">
              <div className="d-flex justify-content-end align-items-center">
                <button
                  type="button"
                  className="btn btn-danger d-none d-lg-block m-l-15"
                  data-toggle="modal"
                  data-target="#responsive-modal"
                >
                  Deactivate
                </button>
                <button
                  type="button"
                  className="btn btn-info d-none d-lg-block m-l-15"
                >
                  Activate
                </button>
              </div>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <td className="font-medium">First name</td>
                  <td>{firstName}</td>
                </tr>
                <tr>
                  <td className="font-medium">Last name</td>
                  <td>{lastName}</td>
                </tr>
                <tr>
                  <td className="font-medium">Email</td>
                  <td>{emailUser}</td>
                </tr>
                <tr>
                  <td className="font-medium">Role</td>
                  <td>{roleUser}</td>
                </tr>
                {roleUser !== "owner" ? (
                  <tr>
                    <td className="font-medium">Report to</td>
                    <td>
                      <Select
                        value={reporterTo ? reporterTo : selectReproter}
                        onChange={(value: any) => {
                          const select = {
                            value: value.value,
                            label: value.label,
                          };
                          onChangeReporTo(value);
                          setReporterTo(select);
                        }}
                        options={listReport}
                        // defaultValue={reporterTo}
                      />
                    </td>
                  </tr>
                ) : null}

                <tr>
                  <td className="font-medium">Phone</td>
                  <td>{phoneUser}</td>
                </tr>
                <tr>
                  <td className="font-medium">Added by</td>
                  <td>
                    {adddBy}
                    <p className="font-12 text-black-50">{addDate}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <footer className="footer">© 2022 CRM Dreamland</footer>
    </div>
  );
};

export default DetailUserContainer;
