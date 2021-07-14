import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { userActions } from 'resources/user/user.slice';

import Button from 'components/Button';

import styles from './styles.module.scss';

export default function MainLayout({ children }) {
  const dispatch = useDispatch();

  const onSignOut = useCallback(async () => {
    await dispatch(userActions.signOut());
  }, [dispatch]);

  return (
    <>
      <div className={styles.header}>
        <span>Main</span>
        <Button onClick={onSignOut}>Sign out</Button>
      </div>
      {children}
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
