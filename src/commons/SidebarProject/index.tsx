const SidebarProject = () => {
  return (
    <div className="sidebar-menu">
      <aside className="left-sidebar">
        <h4 className="text-themecolor card-body">Project setting</h4>
        <div className="scroll-sidebar">
          <nav className="">
            <ul className="nav nav-tabs nav-horizon" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#general"
                  role="tab"
                  aria-expanded="false"
                >
                  <span className="hide-menu">General</span>
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#design"
                  role="tab"
                >
                  <span className="hide-menu">Design</span>
                </a>
              </li>

              <li>
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#hosting"
                  role="tab"
                  aria-expanded="false"
                >
                  <span className="hide-menu">Hosting</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default SidebarProject;
