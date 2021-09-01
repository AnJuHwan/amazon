import React from 'react';
import { useStateValue } from '../../Store/StateProvider';
import styles from './CheckoutProduct.module.css';
const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeBasket = () => {
    dispatch({
      type: 'REMOVE_TO_BASKET',
      id,
    });
  };
  return (
    <div className={styles.checkoutProduct}>
      <img className={styles.productImg} src={image} alt='' />
      <div className={styles.productInfo}>
        <p className={styles.productTitle}>{title}</p>
        <p className={styles.productPrice}>₩ {price}원</p>
        <div className={styles.productRating}>
          {Array(rating)
            .fill()
            .map(() => (
              <p>★</p>
            ))}
        </div>

        <button onClick={removeBasket}> 장바구니에서 제거하기 </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
