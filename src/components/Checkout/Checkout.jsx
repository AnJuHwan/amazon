import React from 'react';
import SubTotal from '../SubTotal/SubTotal';
import styles from './Checkout.module.css';
const Checkout = (props) => {
  return (
    <div className={styles.checkout}>
      <div className={styles.checkout_left}>
        <img
          className={styles.checkout_ad}
          src='https://www.disruptivestatic.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png'
          alt=''
        />
        <div>
          <h2 className={styles.checkout_title}>장바구니입니다.</h2>
          {/* 장바구니 아이템 */}
          {/* 장바구니 아이템 */}
          {/* 장바구니 아이템 */}
          {/* 장바구니 아이템 */}
        </div>
      </div>
      <div className={styles.checkout_right}>
        <SubTotal />
      </div>
    </div>
  );
};
export default Checkout;
