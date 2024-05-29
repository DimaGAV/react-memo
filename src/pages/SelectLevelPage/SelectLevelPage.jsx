import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useEffect, useState } from "react";

export function SelectLevelPage() {
  const [mode, setMode] = useState(false);
  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/3">
              1
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/6">
              2
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/9">
              3
            </Link>
          </li>
        </ul>
        {/* стилизовать чек бокс */}
        <label className={styles.selectModeLabel} for="three-try-game">
          <input
            id="three-try-game"
            label="Игра с 3 попытками"
            className={styles.selectModeCheckbox}
            type="checkbox"
            onChange={() => setMode(!mode)}
          />
          Игра с 3-мя попытками
        </label>
      </div>
    </div>
  );
}
