import styles from './page.module.css';

export default function Index() {
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome to your new social network 👋
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
