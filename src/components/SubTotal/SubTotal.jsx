import React from 'react';
import CurrecnyFormat from 'react-currency-format';
import { getBasketTotal } from '../../Store/Reducer';
import { useStateValue } from '../../Store/StateProvider';
import styles from './SubTotal.module.css';

const SubTotal = (props) => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className={styles.subtotal}>
      <CurrecnyFormat
        renderText={(value) => (
          <>
            <p>
              총액 ( {basket.length}items): <strong> {value} 원 </strong>
            </p>
            <small className={styles.subtotal_gift}>
              <input type='checkbox' />
              체크박스입니다.
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₩'}
      />
      <button>결제하기</button>
    </div>
  );
};

export default SubTotal;
