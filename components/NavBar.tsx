import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex light-bg justify-space">
      <div className="logo white">
        <Link href="/">Drunkiel</Link>
      </div>

      <ul className="flex white">
        <li className="blue">
          <Link href="/">{"< Home />"}</Link>
        </li>
        <li>
          <Link href="/#about">About Me.</Link>
        </li>
      </ul>
    </nav>
  );
}
