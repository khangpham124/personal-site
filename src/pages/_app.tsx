import "styles/index.css";
import "styles/globals.css";
import DefaultLayout from "commons/Layouts/DefaultLayout";
import "../assets/style.scss";

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
export default MyApp;
