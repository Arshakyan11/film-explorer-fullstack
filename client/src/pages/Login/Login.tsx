import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ROUTES } from "../../routes/Routes";
import { validationLogin } from "../../helpers/useValidation";

import styles from "./Login.module.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  loginGlobal,
  setLogVisiblePass,
} from "../../store/LoginSlice/LoginSlice";
import { loginUserHelper } from "../../helpers/createUserFrom";
import { useAppDispatch, useAppSelector } from "../../app/store";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { initialValues, isHiden } = useAppSelector(loginGlobal);

  return (
    <section>
      <div className={styles.registrationSec}>
        <div className={styles.formBox}>
          <p className={styles.titleofBox}>Login to your Account</p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationLogin}
            onSubmit={(e) => {
              loginUserHelper(e, dispatch, navigate);
            }}
          >
            <Form>
              <fieldset>
                <Field name="email" placeholder="Email Address" type="text" />
                <legend>
                  <ErrorMessage
                    name="email"
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
                  onClick={() => dispatch(setLogVisiblePass(!isHiden))}
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
