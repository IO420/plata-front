import "../../style/header.css";
import "../../style/global.css";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className='navbar'>
        <div className='container'>
          <Link href="/" className='logo'>
            Plata
          </Link>
          <ul className='navLinks'>
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
