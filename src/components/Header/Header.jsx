import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../Store/StateProvider';
import styles from './Header.module.css';

const Header = (props) => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className={styles.header}>
      <Link to='/'>
        <img
          src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='amazon logo'
          className={styles.header_logo}
        />
      </Link>
      <form className={styles.searchForm}>
        <input type='text' className={styles.searchInput} />
        <button className={styles.searchButton}>검색</button>
      </form>

      <nav className={styles.nav}>
        <div className={styles.options}>
          <span className={styles.option}>안녕하세요!</span>
          <span className={styles.option2}>로그인하기</span>
        </div>
        <div className={styles.options}>
          <span className={styles.option}>돌아가기!</span>
          <span className={styles.option2}>주문내역</span>
        </div>
        <div className={styles.options}>
          <span className={styles.option}>반가워요</span>
          <span className={styles.option2}>좋아요</span>
        </div>
      </nav>

      <Link className={styles.link} to='/checkout'>
        <div className={styles.shopppingBasket}>
          <span>장바구니</span>
          <span>{basket.length === 0 ? 0 : basket.length}</span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
