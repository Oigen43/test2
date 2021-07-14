import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as userApi from 'resources/user/user.api';

import FormInput from 'components/FormInput';

import styles from './styles.module.scss';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email('errors.email').required(),
  password: yup.string().required(),
});

export default function SignIn() {
  const {
    handleSubmit, register, formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await userApi.signUp(data);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          {...register('firstName')}
          errors={errors.firstName}
        />
        <FormInput
          {...register('lastName')}
          errors={errors.lastName}
        />
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
