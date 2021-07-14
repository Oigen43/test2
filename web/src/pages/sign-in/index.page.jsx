import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import handleError from 'helpers/handle-error';

import { userActions } from 'resources/user/user.slice';

import FormInput from 'components/FormInput';

import styles from './styles.module.scss';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const {
    handleSubmit, register, setError, formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await dispatch(userActions.signIn(data));
    } catch (e) {
      handleError(e, setError);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          {...register('email')}
          errors={errors.email}
        />
        <FormInput
          {...register('password')}
          errors={errors.password}
        />
        <button type="submit">sss</button>
      </form>
    </div>
  );
}
