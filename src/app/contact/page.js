import styles from "./page.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactBox}>
        <h1 className={styles.title}>
          Whisper your thoughts, I'm all ears 👂
        </h1>
        <form className={styles.form}>
          <div className={styles.formElement}>
            <label>
              Your name
            </label>
            <input type="text" placeholder="Enter your name" required className={styles.input} />
          </div>
          <div className={styles.formElement}>
            <label>
              Your email
            </label>
            <input type="email" placeholder="Enter your email" required className={styles.input} />
          </div>
          <div className={styles.formElement}>
            <label>
              Message
            </label>
            <textarea name="message" cols="30" rows="10" placeholder="Enter your message" className={styles.textarea} />
          </div>
          <button className={styles.button}>
            Send ↗
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact