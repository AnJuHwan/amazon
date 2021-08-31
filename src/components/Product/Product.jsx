import React from 'react';
import styles from './Product.module.css';
const Product = (props) => {
  return (
    <div className={styles.product}>
      <p>제품1</p>
      <span>가격 10,000원</span>
      <div className={styles.rating}>
        <p>★</p>
        <p>★</p>
        <p>★</p>
        <p>★</p>
      </div>
      <img
        src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg'
        alt=''
      />
      <button>장바구니 담기</button>
    </div>
  );
};

export default Product;
