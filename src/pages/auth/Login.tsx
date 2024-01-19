import { FormEvent } from "react";
import { Link } from "react-router-dom";

import { Button, Heading, Input } from "../../components";

import styles from "./Auth.module.css";

export type LoginForm = {
  email: { value: string };
  password: { value: string };
};

const Login = () => {
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & LoginForm;
    const { email, password } = target;
    console.log("Login", email, password);
  };

  return (
    <div className={styles.login}>
      <Heading>Вход</Heading>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.field}>
          <label htmlFor="email">Ваш email</label>
          <Input id="email" name="email" placeholder="Email" />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Ваш пароль</label>
          <Input id="password" name="password" type="password" placeholder="Пароль" />
        </div>
        <Button variant="big">Вход</Button>
      </form>
      <div className={styles.links}>
        <div>Нет акканута?</div>
        <Link to="/auth/register">Зарегистрироваться</Link>
      </div>
    </div>
  );
};

export default Login;
