import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ROUTES } from "../../routes/Routes";
import { validationLogin } from "../../helpers/useValidation";
import { useDispatch, useSelector } from "react-redux";
import { loginGlobal } from "../../store/selectors/loginSelectors";
import {
  ChangingHidenPassword,
  loginGetting,
} from "../../store/actions/loginAction";

import styles from "./Login.module.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { initialValues, isHiden, isExisting } = useSelector(loginGlobal);
  return (
    <section>
      <div className={styles.registrationSec}>
        <div className={styles.formBox}>
          <p className={styles.titleofBox}>Login to your Account</p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationLogin}
            onSubmit={(e, formik) => {
              const { personName, password } = e;
              dispatch(loginGetting(personName, password, navigate));
            }}
          >
            <Form>
              <fieldset>
                <Field name="personName" placeholder="Name" type="text" />
                <legend>
                  <ErrorMessage
                    name="personName"
                    component="div"
                    className={styles.erorr}
                  ></ErrorMessage>
                </legend>
              </fieldset>

              <fieldset>
                <Field
                  name="password"
                  placeholder="Password"
                  type={isHiden ? "password" : "text"}
                />
                <p
                  className={styles.showHide}
                  onClick={() => dispatch(ChangingHidenPassword(!isHiden))}
                >
                  {isHiden ? <FaEye /> : <FaEyeSlash />}
                </p>

                <legend>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className={styles.erorr}
                  ></ErrorMessage>
                </legend>
              </fieldset>
              <p className={styles.missing}>
                {!isExisting && "User Doesnt Exist!!!"}
              </p>
              <div className={styles.btns}>
                <button type="submit">Login</button>
                <Link to={`/${ROUTES.REGISTRATION}`}>Go to Registration</Link>
              </div>
            </Form>
          </Formik>
        </div>
        <Link to={ROUTES.HOME}>Go To Home</Link>
      </div>
    </section>
  );
};

export default Login;
