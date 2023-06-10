import Image from "next/image";
import styles from "./navbar.module.scss";
import Logo from "@/../public/images/newLogo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src={Logo}
            width={150}
            height={100}
            alt="Rohan Poudel Logo"
          />
        </Link>
      </div>
      <ul className={styles.links}>
        <Link href="/">
          <li className={styles.link}>
            Home
          </li>
        </Link>
        <Link href="/projects">
          <li className={styles.link}>
            Projects
          </li>
        </Link>
        <Link href="/articles">
          <li className={styles.link}>
            Articles
          </li>
        </Link>
        <Link href="/contact">
          <li className={styles.link}>
            Contact
          </li>
        </Link>
      </ul>
      <div className={styles.chat}>
        <button className={styles.button}>
          Let's chat
        </button>
      </div>
    </div>
  )
}

export default Navbar