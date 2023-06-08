import Image from "next/image";
import styles from "./navbar.module.scss";
import Logo from "@/../public/images/newLogo.svg";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src={Logo}
          width={150}
          height={100}
          alt="Rohan Poudel Logo"
        />
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          Home
        </li>
        <li className={styles.link}>
          Works
        </li>
        <li className={styles.link}>
          Projects
        </li>
        <li className={styles.link}>
          Articles
        </li>
        <li className={styles.link}>
          Contact
        </li>
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