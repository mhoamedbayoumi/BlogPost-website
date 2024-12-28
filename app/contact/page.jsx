import styles from "./page.module.css";
import Image from "next/image";
import contact from "../contact.png"
export const metadata = {
  title: "Lama Dev Contact Information",
  description: "This is Contact Page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={contact}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
         <button className="p-5 cursor-pointer bg-green-500 border-none border-r-4 text-white w-max font-bold">send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;