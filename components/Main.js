
import styles from "@/styles/Home.module.css";
import { Links } from "@/components/Links";
import {Headline} from "@/components/Headline";



export function Main(props) {
  return (
    <>
      
        <main className={styles.main}>
            <Headline page={props.page} 
            code={<li>
              {props.page}<code>pages/{props.page}.js</code>.
            </li>}
            />
          <Links />
        </main>
     
    </>
  );
}
