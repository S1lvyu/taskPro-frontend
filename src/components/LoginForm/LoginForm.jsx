import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import { loginUser } from "../../redux/operations";
import { getIsAuthenticated } from "../../redux/selectors";
import svgSprite from "../../assets/svg/symbol-defs.svg";
import { loginSchema } from "../../utils/validation";
import css from "./LoginForm.module.css";

const initialValuesForm = {
	email: "",
	password: "",
};

const LoginForm = () => {
	const [showPassword, setShowPassword] = useState(false);

	const isLogIn = useSelector(getIsAuthenticated);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (isLogIn) {
			navigate("/home", { replace: true });
		}
	}, [isLogIn, navigate]);

	const handleSubmit = async (values, { resetForm }) => {
		await dispatch(loginUser(values));
		resetForm();
	};

	const handleTogglePassword = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
	};

	return (
		<Formik
			initialValues={initialValuesForm}
			onSubmit={handleSubmit}
			validationSchema={loginSchema}
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
						Log In Now
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
