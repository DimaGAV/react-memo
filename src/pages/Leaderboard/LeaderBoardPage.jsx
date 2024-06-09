//LeaderBoardPage.jsx
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import styles from "./LeaderBoardPage.module.css";
import { useEffect, useState } from "react";
import { getLeaders } from "../../api";
import achievement1 from "../../img/achievement1.png";
import achievement2 from "../../img/achievement2.png";

function formatTime(seconds) {
  const formattedMinutes = Math.floor(seconds / 60)
    .toString()
    .padStart("2", "0");
  const formattedSeconds = Math.floor(seconds % 60)
    .toString()
    .padStart("2", "0");
  return `${formattedMinutes}:${formattedSeconds}`;
}

function getAchievementImage(achievements) {
  switch (achievements) {
    case 1:
      return achievement1;
    case 2:
      return achievement2;
    default:
      return null;
  }
}

export function LeaderBoardPage() {
  const [leadersList, setLeaders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getLeaders()
      .then(data => {
        setLeaders(data.leaders.sort((a, b) => a.time - b.time).slice(0, 10));
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.header_nav}>
          <div>
            <p className={styles.header_logo}>Лидерборд</p>
          </div>
          <Link to="/">
            <Button>Начать игру</Button>
          </Link>
        </nav>
      </header>
      <div className={styles.user__fields}>
        <div className={styles.user__field}>
          <div className={styles.field_title}>Позиция</div>
          <div className={styles.field_title}>Пользователь</div>
          <div className={styles.field_title}>Достижения</div>
          <div className={styles.field_title}>Время</div>
        </div>
        {error ? (
          <div>{error}</div>
        ) : (
          leadersList.map((leader, index) => (
            <div key={leader.id} className={styles.user__field}>
              <div className={styles.user__field_value}> # {index + 1}</div>
              <div className={styles.user__field_value}>{leader.name}</div>
              <div className={styles.user__field_value}>
                {leader.achievements.map((achievement, i) => (
                  <img
                    key={i}
                    src={getAchievementImage(achievement)}
                    alt={`Achievement ${achievement}`}
                    className={styles.achievement_image}
                  />
                ))}
              </div>
              <div className={styles.user__field_value}>{formatTime(leader.time)}</div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
