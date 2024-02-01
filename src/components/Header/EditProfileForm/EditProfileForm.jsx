import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../redux/operations";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getUser, getUserToken, getTheme } from "../../../redux/selectors";
import { updateUserSchema } from "../../../utils/validation";
import defaultPhoto from "../../../assets/svg/symbol-defs.svg";
import css from "./EditProfileForm.module.css";

export const EditProfileForm = ({ onClose }) => {
  const user = useSelector(getUser);
  const token = useSelector(getUserToken);
  const dispatch = useDispatch();
  const [userPhoto, setUserPhoto] = useState(user?.avatar);
  const [userPreview, setUserPreview] = useState(user?.avatar);
  const [showPassword, setShowPassword] = React.useState(false);
  const initialValues = {
    name: user?.name,
    avatarUrl: user?.avatar || defaultPhoto,
    email: user?.email,
    password: user?.password,
  };
  const theme = useSelector(getTheme);
  const backgroundColor =
    theme === "Light"
      ? "#FDFDFD"
      : theme === "Violet"
      ? "rgba(214, 216, 255, 1)"
      : "#232323";
  const textColor =
    theme === "Light" ? "rgba(22, 22, 22, 1)" : "rgba(255, 255, 255, 1)";

  const handlePhotoChange = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.addEventListener("change", (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      setUserPhoto(file);
      reader.onload = () => {
        setUserPreview(reader.result);
      };
      reader.readAsDataURL(file);
    });
    input.click();
  };
  const handleSubmit = (user, { resetForm }) => {
    const formData = new FormData();

    let updateData = {};
    if (!user.password) {
      updateData.email = user.email;
      updateData.name = user.name;
    } else {
      updateData.email = user.email;
      updateData.name = user.name;
      updateData.password = user.password;
    }

    formData.append("avatar", userPhoto);
    formData.append("updateInfo", JSON.stringify(updateData));

    dispatch(
      updateUser({
        token,
        formData,
      })
    );

    resetForm();
    onClose();
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={updateUserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} style={{ backgroundColor: backgroundColor }}>
        <p className={css.form__title} style={{ color: textColor }}>
          Edit profile
        </p>
        <div className={css.photo} onClick={handlePhotoChange}>
          {userPreview ? (
            <img
              className={css.photo__img}
              src={userPreview}
              alt="ProfilePhoto"
            />
          ) : (
            <svg
              width={68}
              height={68}
              className={css.svg}
              style={{ color: textColor }}
            >
              <use href={defaultPhoto + "#icon-Group-1456q"} />
            </svg>
          )}
        </div>

        <div className={css.input__wrapper}>
          <label htmlFor="name"></label>
          <Field
            className={css.input__field}
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            style={{ color: textColor }}
          />
          <ErrorMessage className={css.errors} name="name" component="div" />
        </div>

        <div className={css.input__wrapper}>
          <label htmlFor="email"></label>
          <Field
            className={css.input__field}
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            style={{ color: textColor }}
          />
          <ErrorMessage className={css.errors} name="email" component="div" />
        </div>

        <div className={css.input__wrapper}>
          <label htmlFor="password"></label>
          <Field
            className={css.input__field}
            id="password"
            name="password"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            style={{ color: textColor, position: "relative" }}
          />

          <span
            className={css.eye}
            onClick={togglePasswordVisibility}
            style={{ color: textColor }}
          >
            {/* {showPassword ? <FaEyeSlash /> : <FaEye />} */}
          </span>
          <ErrorMessage
            className={css.errors}
            name="password"
            component="div"
          />
        </div>

        <button className={css.form__button} type="submit">
          Send
        </button>
      </Form>
    </Formik>
  );
};
