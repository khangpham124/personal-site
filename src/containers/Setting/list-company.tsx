import React, { useState, useEffect } from "react";
import moment from "moment";
import "react-multi-email/style.css";
import toastr from "toastr";
import { usersAPI } from "../../services/identity/users";
import Cookies from "js-cookie";
import { companyAPI } from "../../services/identity/company";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Modal from "../../components/ModalCreate";

const ListCompaniesContainer = () => {
  const servicesCompanyAPI = new companyAPI();
  const servicesUsersAPI = new usersAPI();
  const Router = useRouter();
  const [listCompany, setListCompany] = useState<any[]>([]);
  const accountInfo = JSON.parse(localStorage.getItem("accounts") ?? "{}");
  const companyID = String(Cookies.get("companyID"));

  const onChooseCompany = async (id: string, name: string) => {
    Cookies.set("companyID", id);
    Cookies.set("companyName", name);
    const accountInfo = JSON.parse(localStorage.getItem("accounts") ?? "{}");
    servicesUsersAPI.lastAccessCompany(accountInfo?.uuid, id).then((res) => {
      Router.replace(`/${name}/dashboard`);
    });
  };

  useEffect(() => {
    servicesUsersAPI.getListCompany(accountInfo?.uuid).then((res) => {
      // console.log(res.data);
      // const listCompany = res.data?.items.filter(
      //   (item: any) => item.companyId !== companyID
      // );
      setListCompany(res.data?.items);
    });
  }, []);

  return (
    <div id="main-wrapper">
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-subtitle">List companies</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-subtitle">{listCompany.length} items</h6>
                  <div className="small-grid">
                    <ul className="listCompany">
                      {listCompany.map((company: any) => (
                        <li className="d-flex">
                          {company.company.name}
                          <a
                            className={
                              company.companyId === companyID ? `disabled` : ``
                            }
                            onClick={() => {
                              onChooseCompany(
                                company.companyId,
                                company.company.accessLink
                              );
                            }}
                          >
                            sign in
                            {company.companyId === companyID ? (
                              <em>{`(Stay in)`}</em>
                            ) : (
                              ``
                            )}
                            <i className="fas fa-arrow-alt-circle-right"></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End of Modal Remove User */}
      <footer className="footer">© 2022 CRM Dreamland</footer>
    </div>
  );
};

export default ListCompaniesContainer;
