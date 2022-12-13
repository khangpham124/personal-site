import React, { useEffect, useRef, useState } from "react";
import { i18nInit } from "../../locales/i18next";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { usersAPI } from "../../services/identity/users";
import { useRouter } from "next/router";

const HeaderContainer = () => {
  const defaultLang = Cookies.get("lang");
  const companyName = Cookies.get("companyName");
  const companyID = Cookies.get("companyID");
  const servicesUsersAPI = new usersAPI();
  const [listCompany, setListCompany] = useState<any[]>([]);
  const accountInfo = JSON.parse(localStorage.getItem("accounts") ?? "{}");
  const Router = useRouter();

  useEffect(() => {
    servicesUsersAPI.getListCompany(accountInfo?.uuid, 1, 4).then((res) => {
      // console.log(res.data?.items);
      const listCompany = res.data?.items.filter(
        (item: any) => item.companyId !== companyID
      );
      setListCompany(listCompany);
    });
  }, []);

  const handleClickChangeLang = async (lang: any) => {
    Cookies.set("lang", lang);
    window.location.reload();
  };

  const onChooseCompany = async (id: string, name: string) => {
    Cookies.set("companyID", id);
    Cookies.set("companyName", name);
    const accountInfo = JSON.parse(localStorage.getItem("accounts") ?? "{}");
    servicesUsersAPI.lastAccessCompany(accountInfo?.uuid, id).then((res) => {
      window.location.href = `/${name}/dashboard`;
    });
  };

  return (
    <div id="header">
      <header className="topbar">
        <nav className="navbar top-navbar navbar-expand-md navbar-dark">
          <div className="navbar-header">
            <a className="navbar-brand" href="/dashboard">
              <b>CRM DREAMLAND</b>
            </a>
          </div>

          <div className="navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a
                  className="nav-link nav-toggler d-block d-md-none waves-effect waves-dark"
                  href="javascript:void(0)"
                >
                  <i className="ti-menu"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link sidebartoggler d-none waves-effect waves-dark"
                  href="javascript:void(0)"
                >
                  <i className="icon-menu"></i>
                </a>
              </li>
              <li className="nav-item">
                <form className="app-search d-none d-md-block d-lg-block">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search & enter"
                  />
                </form>
              </li>
            </ul>

            <ul className="navbar-nav my-lg-0">
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle waves-effect waves-dark"
                  href=""
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="ti-email"></i>
                  <div className="notify">
                    <span className="heartbit"></span>
                    <span className="point"></span>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-right mailbox animated bounceInDown">
                  <ul>
                    <li>
                      <div className="drop-title">Notifications</div>
                    </li>
                    <li>
                      <div className="message-center">
                        <a href="javascript:void(0)">
                          <div className="btn btn-danger btn-circle">
                            <i className="fa fa-link"></i>
                          </div>
                          <div className="mail-contnet">
                            <h5>Luanch Admin</h5>
                            <span className="mail-desc">
                              Just see the my new admin!
                            </span>
                            <span className="time">9:30 AM</span>
                          </div>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </li> */}

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle waves-effect waves-dark"
                  href=""
                  id="2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-building" aria-hidden="true"></i>
                  <div className="notify">
                    <span className="heartbit"></span>
                    <span className="point"></span>
                  </div>
                </a>
                <div
                  className="dropdown-menu mailbox dropdown-menu-right animated bounceInDown"
                  aria-labelledby="2"
                >
                  <ul>
                    <li>
                      <div className="message-center">
                        <div className="mail-contnet">
                          {listCompany.length > 0 ? (
                            listCompany.map((company: any, index: number) => (
                              <a
                                key={`conpany_${index}`}
                                onClick={() => {
                                  onChooseCompany(
                                    company.companyId,
                                    company.company.accessLink
                                  );
                                }}
                              >
                                <h5>{company.company.name}</h5>
                              </a>
                            ))
                          ) : (
                            <div className="pd-15">You have only 1 company</div>
                          )}
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <div className="message-center">
                        <div className="mail-contnet">
                          <a href={`/${companyName}/setting/companies`}>
                            See all
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>

              {/* <li className="nav-item dropdown mega-dropdown">
                <a
                  className="nav-link dropdown-toggle waves-effect waves-dark"
                  href=""
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="ti-layout-width-default"></i>
                </a>
                <div className="dropdown-menu animated bounceInDown">
                  <ul className="mega-dropdown-menu row">
                    <li className="col-lg-3 col-xlg-2 m-b-30">
                      <h4 className="m-b-20">CAROUSEL</h4>

                      <div
                        id="carouselExampleControls"
                        className="carousel slide"
                        data-ride="carousel"
                      >
                        <div className="carousel-inner" role="listbox">
                          <div className="carousel-item active">
                            <div className="container"></div>
                          </div>
                          <div className="carousel-item">
                            <div className="container"></div>
                          </div>
                          <div className="carousel-item">
                            <div className="container"></div>
                          </div>
                        </div>
                        <a
                          className="carousel-control-prev"
                          href="#carouselExampleControls"
                          role="button"
                          data-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          href="#carouselExampleControls"
                          role="button"
                          data-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only">Next</span>
                        </a>
                      </div>
                    </li>
                    <li className="col-lg-3 m-b-30">
                      <h4 className="m-b-20">ACCORDION</h4>

                      <div className="accordion" id="accordionExample">
                        <div className="card m-b-0">
                          <div
                            className="card-header bg-white p-0"
                            id="headingOne"
                          >
                            <h5 className="mb-0">
                              <button
                                className="btn btn-link"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                Collapsible Group Item #1
                              </button>
                            </h5>
                          </div>

                          <div
                            id="collapseOne"
                            className="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordionExample"
                          >
                            <div className="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high.
                            </div>
                          </div>
                        </div>
                        <div className="card m-b-0">
                          <div
                            className="card-header bg-white p-0"
                            id="headingTwo"
                          >
                            <h5 className="mb-0">
                              <button
                                className="btn btn-link collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                Collapsible Group Item #2
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapseTwo"
                            className="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordionExample"
                          >
                            <div className="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high.
                            </div>
                          </div>
                        </div>
                        <div className="card m-b-0">
                          <div
                            className="card-header bg-white p-0"
                            id="headingThree"
                          >
                            <h5 className="mb-0">
                              <button
                                className="btn btn-link collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                Collapsible Group Item #3
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapseThree"
                            className="collapse"
                            aria-labelledby="headingThree"
                            data-parent="#accordionExample"
                          >
                            <div className="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high.
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="col-lg-3  m-b-30">
                      <h4 className="m-b-20">CONTACT US</h4>

                      <form>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputname1"
                            placeholder="Enter Name"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                          />
                        </div>
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            id="exampleTextarea"
                            placeholder="Message"
                          ></textarea>
                        </div>
                        <button type="submit" className="btn btn-info">
                          Submit
                        </button>
                      </form>
                    </li>
                    <li className="col-lg-3 col-xlg-4 m-b-30">
                      <h4 className="m-b-20">List style</h4>

                      <ul className="list-style-none">
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-check text-success"></i> You can
                            give link
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-check text-success"></i> Give
                            link
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-check text-success"></i> Another
                            Give link
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-check text-success"></i> Forth
                            link
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="fa fa-check text-success"></i> Another
                            fifth link
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li> */}

              <li className="nav-item dropdown u-pro">
                {/* <a
                  className="nav-link dropdown-toggle waves-effect waves-dark profile-pic"
                  href=""
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="../assets/images/users/1.jpg"
                    alt="user"
                    className=""
                  />
                  <span className="hidden-md-down">
                    Mark &nbsp;<i className="fa fa-angle-down"></i>
                  </span>
                </a> */}
                <div className="dropdown-menu dropdown-menu-right animated flipInY">
                  <a href="javascript:void(0)" className="dropdown-item">
                    <i className="ti-user"></i> My Profile
                  </a>

                  <a href="javascript:void(0)" className="dropdown-item">
                    <i className="ti-wallet"></i> My Balance
                  </a>

                  <a href="javascript:void(0)" className="dropdown-item">
                    <i className="ti-email"></i> Inbox
                  </a>

                  <div className="dropdown-divider"></div>

                  <a href="javascript:void(0)" className="dropdown-item">
                    <i className="ti-settings"></i> Account Setting
                  </a>

                  <div className="dropdown-divider"></div>

                  <a href="login.html" className="dropdown-item">
                    <i className="fa fa-power-off"></i> Logout
                  </a>
                </div>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link  waves-effect waves-light"
                  href={`/${companyName}/setting`}
                >
                  <i className="ti-settings"></i>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link  waves-effect waves-light"
                  onClick={() => {
                    localStorage.removeItem("accounts");
                    Cookies.remove("crm_token");
                    Cookies.remove("isAuthenticated");
                    Cookies.remove("companyName");
                    Cookies.remove("companyID");
                    window.location.reload();
                  }}
                >
                  <i className="fa fa-power-off"></i>
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle waves-effect waves-dark"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {defaultLang === "vi" ? (
                    <img
                      src="/images/icon_vn.png"
                      alt="user"
                      className="icon_flag"
                    />
                  ) : (
                    <img
                      src="/images/icon_us.png"
                      alt="user"
                      className="icon_flag"
                    />
                  )}
                </a>
                <div className="dropdown-menu dropdown-menu-right mailbox animated slideInRight">
                  <p>
                    <a
                      className="nav-link dropdown-toggle waves-effect waves-dark"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      onClick={() => {
                        handleClickChangeLang("en");
                      }}
                    >
                      <img
                        src="/images/icon_us.png"
                        alt="user"
                        className="icon_flag"
                      />
                      English
                    </a>
                  </p>
                  <p>
                    <a
                      className="nav-link dropdown-toggle waves-effect waves-dark"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      onClick={() => {
                        handleClickChangeLang("vi");
                      }}
                    >
                      <img
                        src="/images/icon_vn.png"
                        alt="user"
                        className="icon_flag"
                      />
                      Tiếng Việt
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderContainer;
