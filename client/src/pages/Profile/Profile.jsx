import React, { useEffect } from "react";
import styles from "./Profile.module.scss";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { validationProfile } from "../../helpers/useValidation";
import { useDispatch, useSelector } from "react-redux";
import { profileGlobal } from "../../store/selectors/profileSelectors";
import {
  datagetForProfile,
  profileDataSending,
  profilePasswordSee,
} from "../../store/actions/profileActions";
import { editiingProfileInfo } from "../../helpers/createUserFrom";
import ProfileNavBar from "../../components/ProfileNavBar/ProfileNavBar";

const Profile = () => {
  const { isHiden, isEditing, userData, initialValues } =
    useSelector(profileGlobal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(datagetForProfile(JSON.parse(localStorage.getItem("usersInfo"))));
  }, []);

  const handleSave = (e, formik) => {
    const data = editiingProfileInfo(e, userData);
    localStorage.setItem("usersInfo", JSON.stringify(data));
    dispatch(profileDataSending(userData.id, data));
  };

  return (
    <div className={styles.sectionProfile}>
      <div className={styles.container}>
        <ProfileNavBar
          userData={userData}
          isEditing={isEditing}
          forWhich={"forProfile"}
        />
        <main className={styles.profileMain}>
          <h2 className={styles.profileTitle}>
            <FaUser /> Profile
          </h2>
          {isEditing ? (
            <Formik
              validationSchema={validationProfile}
              initialValues={initialValues}
              onSubmit={(e, formik) => handleSave(e, formik)}
            >
              <Form>
                <fieldset>
                  <Field
                    type="email"
                    name="emailInput"
                    className={styles.input}
                    placeholder="Write New Email"
                  />
                  <legend>
                    <ErrorMessage
                      name="emailInput"
                      component="div"
                      className={styles.erorr}
                    ></ErrorMessage>
                  </legend>
                </fieldset>

                <fieldset>
                  <Field
                    type={isHiden ? "password" : "text"}
                    name="passwordInput"
                    className={styles.input}
                    placeholder="Write new Password"
                  />
                  <p
                    className={styles.showHide}
                    onClick={() => dispatch(profilePasswordSee(!isHiden))}
                  >
                    {isHiden ? <FaEye /> : <FaEyeSlash />}
                  </p>
                  <legend>
                    <ErrorMessage
                      name="passwordInput"
                      component="div"
                      className={styles.erorr}
                    ></ErrorMessage>
                  </legend>
                </fieldset>

                <button type="submit" className={styles.saveButton}>
                  Save Changes
                </button>
              </Form>
            </Formik>
          ) : (
            <>
              <p className={styles.input}>
                {userData.email || "NO INFORMATION"}
              </p>
              <p className={styles.input}>{"*".repeat(8)}</p>
            </>
          )}
        </main>
      </div>
    </div>
  );
};
export default Profile;
