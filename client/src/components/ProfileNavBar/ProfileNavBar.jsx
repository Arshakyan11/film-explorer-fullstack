import React, { useEffect, useState } from "react";
import styles from "./ProfileNavBar.module.scss";
import {
  FaEdit,
  FaFilm,
  FaSignOutAlt,
  FaTrash,
  FaUser,
  FaWallet,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/Routes";
import { useDispatch } from "react-redux";
import { profileEditing } from "../../store/actions/profileActions";
import axios from "axios";

const ProfileNavBar = ({ userData, isEditing, forWhich }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteAccount = () => {
    axios({
      baseURL: `http://localhost:8000/users/${userData.id}`,
      method: "DELETE",
    }).finally(() => {
      localStorage.removeItem("usersInfo");
      window.location.reload();
    });
    navigate(ROUTES.HOME);
  };

  const handleLogout = () => {
    localStorage.removeItem("usersInfo");
    navigate(ROUTES.HOME);
    window.location.reload();
  };

  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.profileSection}>
          <div className={styles.profileSectionMain}>
            <img
              src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
              alt="Profile"
              className={styles.profileImage}
            />
            <p className={styles.email}>{userData.email}</p>
          </div>
          {forWhich === "forProfile" ? (
            <div className={styles.forProfile}>
              <button
                className={styles.editButton}
                onClick={() => dispatch(profileEditing(!isEditing))}
              >
                <FaEdit />
              </button>
              <p className={styles.subscription}>Your subscription is</p>
              <p className={styles.expiryDate}>
                {userData.selectedPlans?.name || "No Plan Selected"}
              </p>
            </div>
          ) : forWhich === "forPlans" ? (
            <div className={styles.forPlans}>
              <p className={styles.subscription}>
                Your subscription is valid until
              </p>
              <p className={styles.expiryDate}>25.12.2090</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <nav className={styles.navMenu}>
          <Link
            className={forWhich === "forProfile" ? styles.active : ""}
            to={`/${ROUTES.PROFILE}`}
          >
            <FaUser /> Profile
          </Link>
          <Link
            to={`/${ROUTES.PROFILE}/${ROUTES.PLANS}`}
            className={forWhich === "forPlans" ? styles.active : ""}
          >
            <FaWallet /> Plans
          </Link>
          <Link
            to={`/${ROUTES.PROFILE}/${ROUTES.WATCHLIST}`}
            className={forWhich === "forWhatchlist" ? styles.active : ""}
          >
            <FaFilm /> Watchlist
          </Link>
        </nav>
        <div className={styles.buttons}>
          <button
            className={`${styles.logout} ${styles.btnLog}`}
            onClick={handleLogout}
          >
            <FaSignOutAlt /> Log out
          </button>
          <button
            className={`${styles.logout} ${styles.deleteAccount}`}
            onClick={() => setIsModalOpen(true)}
          >
            <FaTrash /> DELETE ACCOUNT
          </button>
        </div>
      </aside>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <p>
              Are you sure to <br /> delete your account?
            </p>
            <div className={styles.modalButtons}>
              <button className={styles.yesButton} onClick={deleteAccount}>
                Yes
              </button>
              <button
                className={styles.noButton}
                onClick={() => setIsModalOpen(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileNavBar;
