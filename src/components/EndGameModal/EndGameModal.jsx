import styles from "./EndGameModal.module.css";

import { Button } from "../Button/Button";

import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { useState } from "react";
import { uploadLeaders } from "../../api";
import { Link } from "react-router-dom";

export function EndGameModal({ isWon, gameDurationSeconds, gameDurationMinutes, onClick, isLeader }) {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState(null);
  const [isUpLoad, setisUpLoad] = useState(false);

  const title = isLeader ? "Вы попали на Лидерборд!" : isWon ? "Вы победили!" : "Вы проиграли!";

  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";

  const handleSubmit = async e => {
    e.preventDefault();
    if (!userName.trim()) {
      alert("Введите имя игрока");
      return;
    }
    try {
      await uploadLeaders({ name: userName, time: gameDurationMinutes * 60 + gameDurationSeconds });
      setisUpLoad(true);
      setError(false);
    } catch (err) {
      setError("Данные не отправлены! Пожалуйста, попробуйте позже");
    }
  };
  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <h2 className={styles.title}>{title}</h2>
      {isLeader && (
        <>
          <input
            type="text"
            className={styles.input}
            placeholder="Пользователь"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
          {error && <p className={styles.error}>{error}</p>}
          {!isUpLoad ? (
            <Button onClick={handleSubmit}>Отправить</Button>
          ) : (
            <p className={styles.description}>Результат отправлен</p>
          )}
        </>
      )}
      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
      </div>

      <Button onClick={onClick}>Играть снова</Button>
      {isLeader && (
        <Link className={styles.leaderlink} to="/leaderboard">
          Перейти к лидерборду
        </Link>
      )}
    </div>
  );
}
