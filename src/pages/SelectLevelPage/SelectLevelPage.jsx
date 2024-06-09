import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { Button } from "../../components/Button/Button";
import { useMode } from "../../context/mode";
import { useState } from "react";

export function SelectLevelPage() {
  const { mode, setMode } = useMode();
  const [selectedLevel, setSelectedLevel] = useState(0);
  const [error, setError] = useState(null);

  const startGame = () => {
    if (selectedLevel !== 0) {
      const gameRoute = `react-memo/game/${selectedLevel}`;
      window.location.href = gameRoute;
    } else {
      setError("Выберите уровень сложности!!!");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <div
              className={`${styles.levelLink} ${selectedLevel === 3 ? styles.selected : ""}`}
              onClick={() => setSelectedLevel(3)}
            >
              1
            </div>
          </li>
          <li className={styles.level}>
            <div
              className={`${styles.levelLink} ${selectedLevel === 6 ? styles.selected : ""}`}
              onClick={() => setSelectedLevel(6)}
            >
              2
            </div>
          </li>
          <li className={styles.level}>
            <div
              className={`${styles.levelLink} ${selectedLevel === 9 ? styles.selected : ""}`}
              onClick={() => setSelectedLevel(9)}
            >
              3
            </div>
          </li>
          {/* <Link className={styles.levelLink} to="/game/3">
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
          </li> */}
        </ul>
        {!selectedLevel ? error && <p className={styles.texterror}>{error}</p> : ""}
        <label htmlFor="ch1" className={styles.selectModeLabel}>
          <input id="ch1" label="Игра с 3 попытками" checked={mode} type="checkbox" onChange={() => setMode(!mode)} />
          <span className={styles.checkbox_container}></span>
          Лёгкий режим (3 жизни)
        </label>
        <Button onClick={startGame}>Играть</Button>
        <Link className={styles.leaderlink} to="/leaderboard">
          Перейти к лидерборду
        </Link>
      </div>
    </div>
  );
}
