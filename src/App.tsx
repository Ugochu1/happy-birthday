import "./App.css";
import CakePage from "./pages/CakePage";
import { useState } from "react";
import Letter from "./pages/Letter";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  function onProgress() {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    }
  }
  return (
    <>
      {currentPage === 1 && <CakePage onComplete={onProgress} />}
      {currentPage === 2 && <Letter />}
    </>
  );
}

export default App;
