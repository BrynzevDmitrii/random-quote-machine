import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { ButtonGetQuote } from "./components/ButtonGetQuote/ButtonGetQuote";
import { RandomQuote } from "./components/RandomQuote/RandomQuote";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState({});
  const handaleChange = () => {
    try {
      axios
        .get(
          `http://localhost:8010/proxy/?method=getQuote&key=random&format=json&lang=ru&jsonp=?`
        )
        .then((response) => setQuote(response.data), console.log(quote));
    } catch (error) {
      console.error(`Download error: ${error.message}`);
    }
  };

  useEffect(() => handaleChange(), []);

  return (
    <div className={styles.flex}>
      <h1 className={styles.h1}>Генератор цитат</h1>
      <div className={styles.quoteBlok}>
        <RandomQuote quote={quote} />
      </div>

      <ButtonGetQuote handaleChange={handaleChange} />
    </div>
  );
}

export default App;
