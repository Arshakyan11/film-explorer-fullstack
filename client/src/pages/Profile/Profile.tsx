import styles from "./Profile.module.scss";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from "formik";
import { validationProfile } from "../../helpers/useValidation";

import ProfileNavBar from "../../components/ProfileNavBar/ProfileNavBar";
import { editiingProfileInfo } from "../../helpers/createUserFrom";
import { useAppDispatch, useAppSelector } from "../../app/store";
import {
  getAllProfileInfo,
  profilePasswordSee,
} from "../../store/ProfileSlice/ProfileSlice";
import { getUserInfo } from "../../store/AuthSlice/AuthSlice";
import type { ProfileFormValues } from "../../types/formTypes";

const Profile = () => {
  const { isHiden, isEditing, initialValues } =
    useAppSelector(getAllProfileInfo);
  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector(getUserInfo);

  const handleSave = (
    e: ProfileFormValues,
    formik: FormikHelpers<ProfileFormValues>,
  ) => {
    const { newPasswordRepeat, ...resetData } = e;
    editiingProfileInfo(resetData, formik, dispatch);
  };
  if (!userInfo) return null;
  return (
    <div className={styles.sectionProfile}>
      <div className={styles.container}>
        <ProfileNavBar
          userInfo={userInfo}
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
              onSubmit={handleSave}
            >
              <Form>
                <fieldset>
                  <Field
                    type="password"
                    name="password"
                    className={styles.input}
                    placeholder="Your Last Password"
                  />
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
                    type={isHiden ? "password" : "text"}
                    name="newPassword"
                    className={styles.input}
                    placeholder="New Password"
                  />
                  <p
                    className={styles.showHide}
                    onClick={() => dispatch(profilePasswordSee(!isHiden))}
                  >
                    {isHiden ? <FaEye /> : <FaEyeSlash />}
                  </p>
                  <legend>
                    <ErrorMessage
                      name="newPassword"
                      component="div"
                      className={styles.erorr}
                    ></ErrorMessage>
                  </legend>
                </fieldset>

                <fieldset>
                  <Field
                    type={isHiden ? "password" : "text"}
                    name="newPasswordRepeat"
                    className={styles.input}
                    placeholder="Repeat New Password"
                  />
                  <p
                    className={styles.showHide}
                    onClick={() => dispatch(profilePasswordSee(!isHiden))}
                  >
                    {isHiden ? <FaEye /> : <FaEyeSlash />}
                  </p>
                  <legend>
                    <ErrorMessage
                      name="newPasswordRepeat"
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
                {userInfo?.email || "NO INFORMATION"}
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
