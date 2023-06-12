import styles from "./newsletter.module.scss";

const Newsletter = () => {

  return (
    <div className={styles.newsLetter}>
      <form className={styles.form} action="https://formsubmit.co/nsrapoudel@gmail.com" method="POST" >
        <input type="hidden" name="_subject" value="Newsletter" />
        <input name="email" type="email" placeholder="Subscribe to my Newsletter" required className={styles.input} />
        <button className={styles.button}>
          <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </form>
    </div>
  )
}

export default Newsletter