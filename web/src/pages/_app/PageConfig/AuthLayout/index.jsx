import PropTypes from 'prop-types';

export default function AuthLayout({ children }) {
  return (
    <>
      <div>Auth</div>
      {children}
    </>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
