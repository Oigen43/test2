import Link from 'next/link';

export default function Profile() {
  return (
    <>
      <h2>Profile</h2>
      <span>Firstname:</span>
      <div />
      <Link href="/sign-in">
        <a>Sign In</a>
      </Link>
      <div />
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
}
