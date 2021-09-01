import React from 'react';
import { useStateValue } from '../../Store/StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import SubTotal from '../SubTotal/SubTotal';
import styles from './Checkout.module.css';
const Checkout = (props) => {
  const [{ basket }, dispatch] = useStateValue();

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
          {basket.map((item) => {
            return (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.checkout_right}>
        <SubTotal />
      </div>
    </div>
  );
};
export default Checkout;
