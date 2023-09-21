import styles from "../../styles/Header.module.css";
import 'remixicon/fonts/remixicon.css'
import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav className={styles.container}>
        <div className={styles.logo}>MD Sir Silchar</div>
        <div className={styles.menu}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><span><i className="ri-phone-line"></i></span> +91 600335XXXX</li>
          </ul>
        </div>

      </nav>
    </>
  );
};

export default Header;
