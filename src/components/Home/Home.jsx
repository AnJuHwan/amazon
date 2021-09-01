import React from 'react';
import Product from '../Product/Product';
import styles from './Home.module.css';

const Home = (props) => {
  return (
    <div className={styles.home}>
      <img
        className={styles.home_image}
        src='https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg'
        alt=''
      />

      <div className={styles.home_row}>
        <Product
          id='2001'
          title='제품1'
          price={2000}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg'
        />
        <Product
          id='2002'
          title='제품2'
          price={2500}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/January/Fuji_Dash_EchoDot_Jan21_1x._SY304_CB413050328_.jpg'
        />
      </div>
      <div className={styles.home_row}>
        <Product
          id='2003'
          title='제품3'
          price={4000}
          rating={3}
          image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Dash_Oculus_1x._SY304_CB667158353_.jpg'
        />
        <Product
          id='2004'
          title='제품4'
          price={3000}
          rating={2}
          image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg'
        />
      </div>
      <div className={styles.home_row}>
        <Product
          id='2005'
          title='제품5'
          price={21000}
          rating={1}
          image='https://m.media-amazon.com/images/I/61j17FjPhtL._AC_SL1500_.jpg'
        />
        <Product
          id='2000'
          title='제품6'
          price={22000}
          rating={0}
          image='https://images-na.ssl-images-amazon.com/images/I/71FJL9TDRwL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
        />
      </div>
    </div>
  );
};

export default Home;
