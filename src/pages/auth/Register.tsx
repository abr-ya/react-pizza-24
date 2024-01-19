import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button, Heading, Input } from "../../components";

import styles from "./Auth.module.css";

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

  const onSubmit = (data: IFormData) => {
    console.log(data);
  };

  return (
    <div className={styles.login}>
      <Heading>Регистрация</Heading>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <label htmlFor="email">Ваш email</label>
          <Input id="email" placeholder="Email" {...register("email")} />
          <p className="error">{errors.email?.message}</p>
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Ваш пароль</label>
          <Input id="password" type="password" placeholder="Пароль" {...register("password")} />
          <p className="error">{errors.password?.message}</p>
        </div>
        <div className={styles.field}>
          <label htmlFor="name">Ваше имя</label>
          <Input id="name" placeholder="Имя" {...register("name")} />
          <p className="error">{errors.name?.message}</p>
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
