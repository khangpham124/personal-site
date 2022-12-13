import { useRouter } from "next/router";
import authHelpers from "../../services/helpers";
import Cookies from "js-cookie";

const withAuth = (WrappedComponent) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const Router = useRouter();
      // const loggedIn = authHelpers.getAccessToken();
      const isCrmToken = Cookies.get("crm_token");
      if (isCrmToken === undefined) {
        Router.replace("/");
        return null;
      }

      return <WrappedComponent {...props} />;
    }

    return null;
  };
};

export default withAuth;
