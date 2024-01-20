import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button, Heading, Input } from "../../components";

import styles from "./Auth.module.css";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { useEffect } from "react";
import { getProfile, registerUser } from "../../app/user.slice";

interface IFormData {
  email: string;
  password: string;
  name: string;
}

const schema = yup.object({
  email: yup.string().email("Email format is not valid").required("Email is required"),
  password: yup.string().required("Password is required"),
  name: yup.string().required("Name is required"),
});

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { jwt, registerErrorMessage } = useAppSelector((state) => state.user);

  const form = useForm<IFormData>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (params: IFormData) => {
    console.log(params);
    dispatch(registerUser(params));
  };

  useEffect(() => {
    if (jwt) {
      dispatch(getProfile());
      navigate("/");
    }
  }, [navigate, jwt]);

  return (
    <div className={styles.wrapper}>
      <Heading>Регистрация</Heading>
      {registerErrorMessage && <div className={styles.errorBlock}>{registerErrorMessage}</div>}
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <label htmlFor="email">Ваш email</label>
          <Input id="email" placeholder="Email" {...register("email")} />
          <p className={styles.error}>{errors.email?.message}</p>
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Ваш пароль</label>
          <Input id="password" type="password" placeholder="Пароль" {...register("password")} />
          <p className={styles.error}>{errors.password?.message}</p>
        </div>
        <div className={styles.field}>
          <label htmlFor="name">Ваше имя</label>
          <Input id="name" placeholder="Имя" {...register("name")} />
          <p className={styles.error}>{errors.name?.message}</p>
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
