import styles from "./newsletter.module.scss";

const Newsletter = () => {
  return (
    <div className={styles.newsLetter}>
      <form className={styles.form}>
        <input type="email" placeholder="Subscribe to my Newsletter" required className={styles.input} />
        <button className={styles.button}>
          <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </form>
    </div>
  )
}

export default Newsletter