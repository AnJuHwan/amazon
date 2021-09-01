import React from 'react';
import { useStateValue } from '../../Store/StateProvider';
import styles from './Product.module.css';

const Product = ({ id, title, price, image, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  console.log('장바구니 확인', basket);

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
      <button onClick={addToBasket}>장바구니 담기</button>
    </div>
  );
};

export default Product;
