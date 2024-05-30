import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import styles from "./LiderBoardPage.module.css";

export function LiderBoardPage() {
  return (
    <>
      <header>
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
          <div className={styles.user__field_value}>Место</div>
          <div className={styles.user__field_value}>Пользователь</div>
          <div className={styles.user__field_value}>Время</div>
        </div>
      </div>
    </>
  );
}
