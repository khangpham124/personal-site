import Link from "next/link";
import Cookies from "js-cookie";

const SidebarDashboard = () => {
  const companyName = Cookies.get("companyName");
  return (
    <div id="sidebar">
      <aside className="left-sidebar">
        <h3 className="text-themecolor card-body">Settings</h3>
        <div className="scroll-sidebar">
          <nav className="sidebar-nav">
            <ul id="sidebarnav">
              <li className="user-pro">
                <a
                  className="has-arrow waves-effect waves-dark"
                  aria-expanded="false"
                >
                  <span className="hide-menu">General</span>
                </a>
                <ul aria-expanded="false" className="collapse">
                  <li>
                    <a href={`/${companyName}/setting`}>
                      <i className="ti-user"></i> Personal Settings
                    </a>
                  </li>
                  <li>
                    <a href={`/${companyName}/setting/company-info`}>
                      <i className="ti-wallet"></i> Company detail
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li>
                <a
                  className="has-arrow waves-effect waves-dark"
                  aria-expanded="false"
                >
                  <i className="icon-speedometer"></i>
                  <span className="hide-menu">
                    Dashboard
                    <span className="badge badge-pill badge-cyan ml-auto">
                      4
                    </span>
                  </span>
                </a>
                <ul aria-expanded="false" className="collapse">
                  <li>
                    <a href="index.html">Minimal </a>
                  </li>
                  <li>
                    <a href="index2.html">Analytical</a>
                  </li>
                  <li>
                    <a href="index3.html">Demographical</a>
                  </li>
                  <li>
                    <a href="index4.html">Modern</a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="has-arrow waves-effect waves-dark"
                  aria-expanded="false"
                >
                  <i className="ti-layout-grid2"></i>
                  <span className="hide-menu">Apps</span>
                </a>
                <ul aria-expanded="false" className="collapse">
                  <li>
                    <a href="app-calendar.html">Calendar</a>
                  </li>
                  <li>
                    <a href="app-chat.html">Chat app</a>
                  </li>
                  <li>
                    <a href="app-ticket.html">Support Ticket</a>
                  </li>
                  <li>
                    <a href="app-contact.html">Contact / Employee</a>
                  </li>
                  <li>
                    <a href="app-contact2.html">Contact Grid</a>
                  </li>
                  <li>
                    <a href="app-contact-detail.html">Contact Detail</a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="has-arrow waves-effect waves-dark"
                  aria-expanded="false"
                >
                  <i className="ti-email"></i>
                  <span className="hide-menu">Inbox</span>
                </a>
                <ul aria-expanded="false" className="collapse">
                  <li>
                    <a href="app-email.html">Mailbox</a>
                  </li>
                  <li>
                    <a href="app-email-detail.html">Mailbox Detail</a>
                  </li>
                  <li>
                    <a href="app-compose.html">Compose Mail</a>
                  </li>
                </ul>
              </li>*/}

              <li>
                <a
                  className="has-arrow waves-effect waves-dark"
                  aria-expanded="false"
                >
                  <span className="hide-menu">Users and control</span>
                </a>
                <ul aria-expanded="false" className="collapse">
                  <li>
                    <a href={`/${companyName}/setting/users`}>Users</a>
                  </li>
                  <li>
                    <a href={`/${companyName}/role`}>Role</a>
                  </li>
                  <li>
                    <a href={`/${companyName}/group-hiierachy`}>
                      Group Hiierachy
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  className="waves-effect waves-dark"
                  href={`/${companyName}/setting/companies`}
                  aria-expanded="false"
                >
                  <span className="hide-menu">List Companies</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default SidebarDashboard;
