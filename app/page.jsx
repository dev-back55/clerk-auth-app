import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "./components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          El mejor desarrollo y diseño para tus productos.
        </h1>
        <p className={styles.desc}>
          Convirtiendo tu idea en Realidad. Ofrecemos tecnología de punta para tu Empresa.
        </p>
        <Button url="/" text="Comienza Ahora"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
