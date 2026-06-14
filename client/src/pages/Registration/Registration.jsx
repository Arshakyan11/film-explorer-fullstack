import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ROUTES } from "../../routes/Routes";
import { useDispatch, useSelector } from "react-redux";
import { registrationGlobal } from "../../store/selectors/registrationSelectors";
import {
  RegistrationDataGetting,
  seeHidenPasswordOnReg,
} from "../../store/actions/registrationAction";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { validationRegistration } from "../../helpers/useValidation";

import styles from "./Registration.module.scss";
import { createUserFromRegistration } from "../../helpers/createUserFrom";

const Registration = () => {
  const dispatch = useDispatch();
  const { isHiden, initialValues } = useSelector(registrationGlobal);
  const navigate = useNavigate();
  return (
    <section>
      <div className={styles.registrationSec}>
        <div className={styles.formBox}>
          <p className={styles.titleofBox}>Register to get started</p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationRegistration}
            onSubmit={(e, formik) => {
              dispatch(RegistrationDataGetting(createUserFromRegistration(e)));
              navigate(`/${ROUTES.LOGIN}`);
              formik.resetForm();
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
                <Field name="phone" placeholder="phone Number" type="text" />

                <legend>
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className={styles.erorr}
                  ></ErrorMessage>
                </legend>
              </fieldset>

              <fieldset>
                <Field name="email" placeholder="email" type="email" />
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
                  onClick={() => dispatch(seeHidenPasswordOnReg(!isHiden))}
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

              <fieldset>
                <Field
                  name="passwordRepeat"
                  placeholder="Confirm Password"
                  type={isHiden ? "password" : "text"}
                />
                <p
                  className={styles.showHide}
                  onClick={() => dispatch(seeHidenPasswordOnReg(!isHiden))}
                >
                  {isHiden ? <FaEye /> : <FaEyeSlash />}
                </p>

                <legend>
                  <ErrorMessage
                    name="passwordRepeat"
                    component="div"
                    className={styles.erorr}
                  ></ErrorMessage>
                </legend>
              </fieldset>
              <div className={styles.btns}>
                <button type="submit">Register</button>
                <Link to={`/${ROUTES.LOGIN}`}> Go to Login</Link>
              </div>
            </Form>
          </Formik>
        </div>
        <Link to={ROUTES.HOME}>Go To Home</Link>
      </div>
    </section>
  );
};

export default Registration;
