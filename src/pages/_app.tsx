import { Provider } from "react-redux";
import "styles/index.css";
import "styles/globals.css";
import configureStore from "src/state-management/configureStore";

const store = configureStore();

function MyApp({ Component, pageProps }) {
  // console.log(process.env);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
