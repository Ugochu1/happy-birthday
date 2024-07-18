import { useState } from "react";
import styles from "./Cake.module.css";

export default function Cake(props: { onCandleOut?: () => void }) {
  const { onCandleOut = () => {} } = props;
  const [flameOn, setFlameOn] = useState(true);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.birthdayCake}>
        <div className={styles.holder}></div>
        <div className={styles.shadow}></div>
        <div className={styles.cake}>
          <div>Happy Birthday</div>
          <div>Omalicha&apos;m &#128152;</div>
          <div>for your love of chocolate cake...</div>
        </div>
        <div className={styles.candle}></div>
        {flameOn && (
          <div
            className={styles.flame}
            onClick={() => {
              onCandleOut();
              setFlameOn(false);
            }}
          ></div>
        )}
      </div>
    </div>
  );
}
