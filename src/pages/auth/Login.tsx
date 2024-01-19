import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button, Heading, Input } from "../../components";

import styles from "./Auth.module.css";
import { API_URL } from "../../constants";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { ILoginResponse } from "../../interfaces/auth.interface";

interface IFormData {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().email("Email format is not valid").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();

  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) navigate("/");
  }, [navigate, jwt]);

  const form = useForm<IFormData>({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const loginRequest = async (payload: IFormData) => {
    try {
      const { data } = await axios.post<ILoginResponse>(`${API_URL}/auth/login`, payload);
      console.log(data);
      localStorage.setItem("jwt", data.access_token);
    } catch (e) {
      if (e instanceof AxiosError) {
        console.log(e.code, e.message);
        setLoginErrorMessage(e.response?.data.message);
      }
    }
  };

  const onSubmit = (data: IFormData) => {
    setLoginErrorMessage("");
    console.log(data);
    loginRequest(data);
  };

  return (
    <div className={styles.wrapper}>
      <Heading>Вход</Heading>
      {loginErrorMessage && <div className={styles.errorBlock}>{loginErrorMessage}</div>}
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
