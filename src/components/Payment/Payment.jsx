import React from 'react';
import { Link } from 'react-router-dom';
import { getBasketTotal } from '../../Store/Reducer';
import { useStateValue } from '../../Store/StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import styles from './Payment.module.css';

const Payment = (props) => {
  const [{ user, basket }, dispatch] = useStateValue();

  return (
    <div className={styles.payment}>
      <div className={styles.paymentContainer}>
        <Link to='/checkout' className={styles.paymentLink}>
          <h1>장바구니로 돌아가기 </h1>
        </Link>
        <div className={styles.peymentItemLength}>
          <h2>({basket?.length}개의 상품이 존재합니다.)</h2>
        </div>

        <div className={styles.payment_section}>
          <h3>배달 받을 곳</h3>
          <p>{user?.email}의 주소 : 인천 서구 신현동</p>
        </div>
      </div>
      <div className={styles.paymentItems}>
        <h2>상품 목록</h2>
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
      <div className={styles.pay}>
        <p>결제: {getBasketTotal(basket)}원</p>
        <button>결제하기</button>
      </div>
    </div>
  );
};

export default Payment;
