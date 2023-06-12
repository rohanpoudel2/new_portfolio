import styles from "./page.module.scss";
import ContactForm from "@/components/ContactForm/ContactForm";

async function getData() {
  const res = await fetch(`${process.env.SITE_URL}/api/page/contact`);

  if (!res.ok) {
    throw new Error("Failed fetching Contact Data");
  }

  return res.json();
}

const Contact = async () => {

  const data = await getData();

  return (
    <div className={styles.contact}>
      <div className={styles.contactBox}>
        <h1 className={styles.title}>
          {data[0]?.acf.title}
        </h1>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact