import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import styles from './Login.module.css';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const histyory = useHistory();

  const loginEmail = (e) => {
    setEmail(e.target.value);
  };

  const loginPassword = (e) => {
    setPassword(e.target.value);
  };

  const signInClick = (e) => {
    e.preventDefault();
    const getAuth = auth;
    signInWithEmailAndPassword(getAuth, email, password)
      .then((auth) => histyory.push('/'))
      .catch((error) => alert('확인된 정보가 없습니다.'));
  };

  const signUpClick = (e) => {
    e.preventDefault();
    const getAuth = auth;
    createUserWithEmailAndPassword(getAuth, email, password)
      .then((auth) => {
        auth && histyory.push('/');
      })
      .catch((error) => alert('이미 아이디가 있습니다.'));
  };
  return (
    <div className={styles.login}>
      <Link to='/'>
        <img
          className={styles.loginImg}
          src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt=''
        />
      </Link>

      <div className={styles.loginContainer}>
        <h1>로그인</h1>

        <form className={styles.loginForm}>
          <h5>이메일</h5>
          <input
            className={styles.input}
            type='text'
            value={email}
            onChange={loginEmail}
          />
          <h5>비밀번호</h5>
          <input
            className={styles.input}
            type='password'
            value={password}
            onChange={loginPassword}
          />
          <button onClick={signInClick} className={styles.signIn}>
            로그인 하기
          </button>
        </form>

        <p>이용 약관 동의하십니까?</p>
        <button onClick={signUpClick} className={styles.join}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Login;
