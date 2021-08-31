import React from 'react';
import Product from '../Product/Product';
import styles from './Home.module.css';

const Home = (props) => {
  return (
    <div className={styles.home}>
      <img
        className={styles.home_image}
        src='https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg'
        alt=''
      />

      <div className={styles.home_row}>
        <Product />
        <Product />
      </div>
      <div className={styles.home_row}>
        <Product />
        <Product />
      </div>
      <div className={styles.home_row}>
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Home;
