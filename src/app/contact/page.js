import { GetPage } from "@/utils/page";
import styles from "./page.module.scss";
import ContactForm from "@/components/ContactForm/ContactForm";

async function getData() {
  const res = await GetPage("contact");

  if (!res) {
    throw new Error("Failed fetching Contact Data");
  }

  return JSON.parse(res);
}

export const metadata = {
  alternates: {
    canonical: '/contact',
  }
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