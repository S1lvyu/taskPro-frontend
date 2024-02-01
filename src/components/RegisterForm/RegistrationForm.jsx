import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import { registerUser } from "../../redux/operations";
import { getIsAuthenticated } from "../../redux/selectors";
import { useNavigate } from "react-router-dom";
import { registrationSchema } from "../../utils/validation";
import svgSprite from "../../assets/svg/symbol-defs.svg";
import css from "./RegisterForm.module.css";

const initialValuesForm = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogIn = useSelector(getIsAuthenticated);

  useEffect(() => {
    if (isLogIn) {
      navigate("/home", { replace: true });
    }
  }, [isLogIn, navigate]);

  const handleSubmit = async (values, { resetForm }) => {
    await dispatch(registerUser(values));
    navigate("/login");
    resetForm();
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Formik
      initialValues={initialValuesForm}
      onSubmit={handleSubmit}
      validationSchema={registrationSchema}
      validateOnBlur
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        dirty,
      }) => (
        <Form className={css.form}>
          <div className={css.form__field}>
            <Field
              autoComplete="name"
              placeholder="Enter your name"
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              values={values.name}
              className={css.form__input}
            />
            {touched.name && errors.name && (
              <p className={css.form__error}>{errors.name}</p>
            )}
          </div>

          <div className={css.form__field}>
            <Field
              autoComplete="email"
              placeholder="Enter your email"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              values={values.email}
              className={css.form__input}
            />
            {touched.email && errors.email && (
              <p className={css.form__error}>{errors.email}</p>
            )}
          </div>

          <div className={css.form__password}>
            <Field
              autoComplete="password"
              placeholder="Enter your password"
              type={!showPassword ? "password" : "text"}
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              values={values.password}
              className={css.form__input}
            />
            {touched.password && errors.password && (
              <p className={css.form__error}>{errors.password}</p>
            )}
            <svg
              width={18}
              height={18}
              className={css.svg}
              onClick={handleTogglePassword}
            >
              <use href={svgSprite + "#icon-eye"} />
            </svg>
          </div>

          <button type="submit" className={css.button}>
            Register Now
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
