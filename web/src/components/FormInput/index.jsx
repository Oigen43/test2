import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const FormInput = forwardRef(({
  name, errors, onChange, onBlur,
}, ref) => (
  <>
    <input
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      ref={ref}
    />
    {errors && <div className={styles.error}>{errors.message}</div> }
  </>
));

FormInput.propTypes = {
  name: PropTypes.string,
  errors: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

FormInput.defaultProps = {
  name: '',
  errors: null,
  onChange: () => {},
  onBlur: () => {},
};

export default FormInput;
