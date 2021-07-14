import Link from 'next/link';

import { userSelectors } from 'resources/user/user.slice';
import { useSelector } from 'react-redux';

export default function Home() {
  const user = useSelector(userSelectors.selectUser);

  return (
    <>
      <h2>Home</h2>
      <Link href="/sign-in">
        <a>Sign In</a>
      </Link>
      <div>{user.firstName}</div>
      <Link href="/profile">
        <a>Profile</a>
      </Link>
    </>
  );
}
