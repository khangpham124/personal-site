import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import CollapseCreate from "components/CollapseCreate";

const DetailRoleContainer: React.FC = () => {
  const router = useRouter();
  const { query } = router;

  const basics = [
    "Dashboards",
    "Leads",
    "Customers",
    "Products",
    "Projects",
    "Analytics",
    "Report",
  ];
  const basicsContent = ["View", "Create", "Edit", "Delete"];

  const records = ["Import records", "Export records"];
  const recordsContent = ["Lead", "Customer", "Project", "Owner", "Marketing"];

  const emails = ["Send Email", "Mass Email", "Delete Email"];

  const renderRole = (roleName) => {
    if (roleName === "basics") {
      return basics.map((item) => (
        <CollapseCreate key={item} label={item} content={basicsContent} />
      ));
    } else if (roleName === "records") {
      return records.map((item) => (
        <CollapseCreate key={item} label={item} content={recordsContent} />
      ));
    } else {
      return emails.map((item) => <CollapseCreate key={item} label={item} />);
    }
  };

  return (
    <div id="main-wrapper">
      <div className="page-wrapper">
        <div className="container-fluid card tab-content">
          <div className="d-flex align-items-center items-center py-3">
            <div className="d-flex">
              <div role="button">
                <Link href="/role">
                  <i className="fas fa-arrow-left"></i>
                </Link>
              </div>
              <div className="p-l-10">
                <h4 className="text-themecolor font-medium">
                  {query.roleDetail}
                </h4>
              </div>
            </div>
          </div>
          <div>
            <h4 className="ml-2 mb-3">Basic</h4>
            {renderRole("basics")}
          </div>
          <div className="mt-5">
            <h4 className="ml-2 mb-3">Import/Export</h4>
            {renderRole("records")}
          </div>
          <div className="mt-5 mb-5">
            <h4 className="ml-2 mb-3">Send Email Permissions</h4>
            {renderRole("emails")}
          </div>
        </div>
      </div>

      <footer className="footer">© 2022 CRM Dreamland</footer>
    </div>
  );
};

export default DetailRoleContainer;
