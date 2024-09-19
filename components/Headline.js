import Image from "next/image";
import styles from "@/styles/Home.module.css";


export default function Headline(props) {
  return (
    <>
          <Image
            className={styles.logo}
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol>
            <li>
              {props.title}<code>pages/{props.page}.js</code>.
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>
    </>
  );
}
