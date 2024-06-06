import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Checklist.module.css";
import Checklist from "@/components/Checklist";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} ${styles.centeredContent}`}>
      <div className={styles.nextSteps}>
        <div className={styles.nextStepsHeader}>
          <h3>Your Financial Journey Begins Here!</h3>
        </div>
        <Checklist />
      </div>
    </main>
  );
}
