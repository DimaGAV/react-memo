import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
// import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { useMode } from "../../context/mode";

export function SelectLevelPage() {
  const { mode, setMode } = useMode();
  // const [mode, setMode] = useState(false);
  /* useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]); */

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
        <label htmlFor="ch1" className={styles.selectModeLabel}>
          <input id="ch1" label="Игра с 3 попытками" checked={mode} type="checkbox" onChange={() => setMode(!mode)} />
          <span className={styles.checkbox_container}></span>
          Лёгкий режим (3 жизни)
        </label>
        <Button>Играть</Button>
        <Link className={styles.leaderlink} to="/leaderboard">
          Перейти к лидерборду
        </Link>
      </div>
    </div>
  );
}
