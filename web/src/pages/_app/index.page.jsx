import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import store from 'resources/store';
import { userActions } from 'resources/user/user.slice';

import PageConfig from './PageConfig';

import 'styles/globals.scss';

function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        await store.dispatch(userActions.getCurrentUser());
      } catch (error) {
        // @todo: add something like sentry
      } finally {
        setLoading(false);
      }
    }

    init();
  }, []);

  if (loading) return null;

  return (
    <Provider store={store}>
      <PageConfig>
        <Component {...pageProps} />
      </PageConfig>
    </Provider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default App;
