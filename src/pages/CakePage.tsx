import styles from "./CakePage.module.css";

import Cake from "../components/Cake/Cake";
import JSConfetti from "js-confetti";

export default function CakePage(props: {
  onComplete?: () => void;
  className?: string;
}) {
  const {
    onComplete = () => {},
    className = "transition duration-300 ease-in data-[closed]:opacity-0",
  } = props;

  async function onCandleOut() {
    onComplete()
    const jsConfetti = new JSConfetti();

    await jsConfetti.addConfetti({
      confettiNumber: 700,
    });
    jsConfetti.clearCanvas();
    jsConfetti.destroyCanvas();
  }

  return (
    <div className="pageContainer">
      <div className={className}>
        <div className={styles.makeAwish}>
          <div>Make a wish.</div>
          <p>
            Blow out the candle when you're done. Click on the flame to put it
            out.
          </p>
        </div>
        <Cake onCandleOut={onCandleOut} />
      </div>
    </div>
  );
}
