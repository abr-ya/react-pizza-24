import { FormEvent } from "react";
import { Link } from "react-router-dom";

import { Button, Heading, Input } from "../../components";

import styles from "./Auth.module.css";

export type RegisterForm = {
  email: { value: string };
  password: { value: string };
  name: { value: string };
};

const Register = () => {
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & RegisterForm;
    const { email, password, name } = target;
    console.log("Register", email, password, name);
  };

  return (
    <div className={styles.login}>
      <Heading>Регистрация</Heading>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.field}>
          <label htmlFor="email">Ваш email</label>
          <Input id="email" name="email" placeholder="Email" />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Ваш пароль</label>
          <Input id="password" name="password" type="password" placeholder="Пароль" />
        </div>
        <div className={styles.field}>
          <label htmlFor="name">Ваше имя</label>
          <Input id="name" name="name" placeholder="Имя" />
        </div>
        <Button variant="big">Зарегистрироваться</Button>
      </form>
      <div className={styles.links}>
        <div>Есть акканут?</div>
        <Link to="/auth/login">Войти</Link>
      </div>
    </div>
  );
};

export default Register;
