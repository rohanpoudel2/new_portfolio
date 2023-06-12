import styles from "./contactform.module.scss"

const ContactForm = () => {

  return (
    <form className={styles.form} action="https://formsubmit.co/nsrapoudel@gmail.com" method="POST">
      <input type="hidden" name="_subject" value="Contact Form" />
      <div className={styles.formElement}>
        <label>
          Your name
        </label>
        <input name="name" type="text" placeholder="Enter your name" required className={styles.input} />
      </div>
      <div className={styles.formElement}>
        <label>
          Your email
        </label>
        <input name="email" type="email" placeholder="Enter your email" required className={styles.input} />
      </div>
      <div className={styles.formElement}>
        <label>
          Message
        </label>
        <textarea name="message" cols="30" rows="10" placeholder="Enter your message" className={styles.textarea} />
      </div>
      <button className={styles.button}>
        Send <i className='fa-solid fa-arrow-trend-up'></i>
      </button>
    </form>
  )
}

export default ContactForm