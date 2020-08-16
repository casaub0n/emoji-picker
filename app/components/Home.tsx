import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';

export default function Home(): JSX.Element {
  return (
    // <div className={styles.container} data-tid="container">
    //   <h2>Emoji Picker</h2>
    //   <Link to={routes.COUNTER}>to Counter</Link>
    <div className={styles.form__group}>
      {/* <i className="fas fa-search search_icon" /> */}
      <label className={styles.form__label} htmlFor="word input">
        <input
          id="word"
          className={styles.form__input}
          type="text"
          placeholder="😊"
        />
      </label>
      {/* <i className="fas fa-times search_icon" /> */}
    </div>
  );
}
