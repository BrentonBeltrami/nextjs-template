import 'styles/globals.css';
import Layout from 'components/Layout';
import ThemeProvider from 'components/ThemeProvider';
import store from "store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
