import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const SidebarContainer = () => {
  const { t: translator } = useTranslation();
  const companyNmae = Cookies.get("companyName");
  return (
    <div id="sidebar" className="horizontal-nav">
      <aside className="left-sidebar">
        <div className="scroll-sidebar">
          <nav className="sidebar-nav">
            <ul id="sidebarnav">
              <li className="user-pro">
                <a
                  className="has-arrow waves-effect waves-dark"
                  aria-expanded="false"
                >
                  <img
                    src="theme/images/users/1.jpg"
                    alt="user-img"
                    className="img-circle"
                  />
                  <span className="hide-menu">User's Name</span>
                </a>
                <ul aria-expanded="false" className="collapse">
                  <li>
                    <a>
                      <i className="ti-user"></i> My Profile
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="ti-wallet"></i> My Balance
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="ti-email"></i> Inbox
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="ti-settings"></i> Account Setting
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fa fa-power-off"></i> Logout
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="waves-effect waves-dark"
                  href={`/${companyNmae}/dashboard`}
                  aria-expanded="false"
                >
                  <span className="hide-menu">
                    {translator("navibar.dashboard")}
                  </span>
                </a>
              </li>

              <li>
                <a
                  className="waves-effect waves-dark"
                  href={`/${companyNmae}/leads`}
                  aria-expanded="false"
                >
                  <span className="hide-menu">
                    {translator("navibar.leads")}
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="waves-effect waves-dark"
                  href={`/${companyNmae}/customers`}
                  aria-expanded="false"
                >
                  <span className="hide-menu">
                    {translator("navibar.customers")}
                  </span>
                </a>
              </li>

              <li>
                <a
                  className="waves-effect waves-dark"
                  href={`/${companyNmae}/products`}
                  aria-expanded="false"
                >
                  <span className="hide-menu">
                    {translator("navibar.products")}
                  </span>
                </a>
              </li>

              <li>
                <a
                  className="waves-effect waves-dark"
                  href={`/${companyNmae}/projects`}
                  aria-expanded="false"
                >
                  <span className="hide-menu">
                    {translator("navibar.projects")}
                  </span>
                </a>
              </li>

              {/* <li>
                <a
                  className="waves-effect waves-dark"
                  href="/analytics"
                  aria-expanded="false"
                >
                  <span className="hide-menu">
                    {translator("navibar.analytics")}
                  </span>
                </a>
              </li> */}

              <li>
                <a
                  className="waves-effect waves-dark"
                  href={`/${companyNmae}/report`}
                  aria-expanded="false"
                >
                  <span className="hide-menu">
                    {translator("navibar.report")}
                  </span>
                </a>
              </li>

              {/* <li>
                <a
                  className="waves-effect waves-dark"
                  href="/marketing"
                  aria-expanded="false"
                >
                  <span className="hide-menu">
                    {translator("navibar.marketing")}
                  </span>
                </a>
              </li> */}
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default SidebarContainer;
