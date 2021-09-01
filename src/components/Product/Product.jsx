import React from 'react';
import styles from './Product.module.css';
const Product = ({ id, title, price, image, rating }) => {
  return (
    <div className={styles.product}>
      <p>{title}</p>
      <span>가격 {price}원</span>
      <div className={styles.rating}>
        {Array(rating)
          .fill()
          .map(() => (
            <p>★</p>
          ))}
      </div>
      <img src={image} alt='' />
      <button>장바구니 담기</button>
    </div>
  );
};

export default Product;
