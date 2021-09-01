import React from 'react';
import CurrecnyFormat from 'react-currency-format';
import styles from './SubTotal.module.css';

const SubTotal = (props) => {
  return (
    <div className={styles.subtotal}>
      <CurrecnyFormat
        renderText={(value) => (
          <>
            <p>
              총액 ( 0items): <strong> 0 원 </strong>
            </p>
            <small className={styles.subtotal_gift}>
              <input type='checkbox' />
              체크박스입니다.
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₩'}
      />
      <button>결제하기</button>
    </div>
  );
};

export default SubTotal;
