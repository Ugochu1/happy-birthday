import { useRef, useState } from "react";
import styles from "./Letter.module.css";

export default function Letter() {
  const [showPageContent, setShowPageContent] = useState(false);
  const [answer, setAnswer] = useState("");
  const hipHip = useRef<HTMLDivElement>(null);

  function downloadLetter() {
    const pdfUrl = "./letter.txt";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Omalicha'm Orjih Favour Chiamaka Kosisochukwu.txt"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setAnswer("");
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.hipHipHooray} ref={hipHip}>
        <div className={styles.hip1}>HIP</div>
        <div className={styles.hip2}>HIP,</div>
        <div
          className={styles.hooray}
          onAnimationEnd={() => {
            if (hipHip.current) {
              hipHip.current.style.transform = "translateY(-100px)";
            }
            setShowPageContent(true);
          }}
        >
          HOORAY!
        </div>
      </div>
      {showPageContent && (
        <div className={styles.letter}>
          <div className={styles.quickOne}>Quick One</div>
          <label htmlFor="question">
            What&apos;s your favorite food of mine? Your answer will not be case
            sensitive, so flex &#128513;
          </label>
          <input
            type="text"
            placeholder="Answer question to download letter"
            id="question"
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
          />
          <div className={styles.buttonContainer}>
            <button
              disabled={!/spaghetti/i.test(answer)}
              onClick={downloadLetter}
            >
              Download Letter
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
