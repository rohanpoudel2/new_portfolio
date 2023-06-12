"use client"
import Image from "next/image";
import styles from "./navbar.module.scss";
import Logo from "@/../public/images/newLogo.svg";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {

  const [mobile, setMobile] = useState(false);

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
        <Link href={"https://wa.link/ux1sb3"} target="_blank">
          <button className={styles.button}>
            Let's chat
          </button>
        </Link>
      </div>
      <div className={styles.menuOpen} onClick={() => setMobile(true)}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className={`${styles.mobile} ${mobile ? styles.open : styles.close}`}>
        <div className={styles.menuClose} onClick={() => setMobile(false)}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <ul className={styles.links}>
          <Link href="/" onClick={() => setMobile(false)}>
            <li className={styles.link}>
              Home
            </li>
          </Link>
          <Link href="/projects" onClick={() => setMobile(false)}>
            <li className={styles.link}>
              Projects
            </li>
          </Link>
          <Link href="/articles" onClick={() => setMobile(false)}>
            <li className={styles.link}>
              Articles
            </li>
          </Link>
          <Link href="/contact" onClick={() => setMobile(false)}>
            <li className={styles.link}>
              Contact
            </li>
          </Link>
        </ul>
        <div className={styles.chat}>
          <Link href={"https://wa.link/ux1sb3"} target="_blank">
            <button className={styles.button}>
              Let's chat
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar