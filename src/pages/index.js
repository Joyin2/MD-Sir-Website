import Link from "next/link";

const index = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
          <a href="/about">about</a>
        </li>
      </ul>
    </div>
  );
};

export default index;
