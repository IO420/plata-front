import "../../style/header.css";
import "../../style/global.css";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className='navbar'>
        <div className='container'>
          <Link href="/" className='logo'>
            MyApp
          </Link>
          <ul className='navLinks'>
            <li>
              <Link href="/" className='navLink'>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className='navLink'>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className='navLink'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
