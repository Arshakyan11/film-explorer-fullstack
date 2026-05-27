import React, { useEffect } from "react";
import { FaList } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./Plans.module.scss";
import { ecoPayz, logo, payPal, tv } from "../../components/Images";
import { useDispatch, useSelector } from "react-redux";
import { plansData } from "../../store/selectors/plansSelectors";
import {
  exportingSelectedPlan,
  makeUserData,
  plansGettingData,
  selectedCurrentPlan,
} from "../../store/actions/plansActions";
import ProfileNavBar from "../../components/ProfileNavBar/ProfileNavBar";

const Plans = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData, plans, selectedPlans, total } = useSelector(plansData);
  useEffect(() => {
    dispatch(plansGettingData());
    dispatch(makeUserData(JSON.parse(localStorage.getItem("usersInfo"))));
  }, []);

  const handleSelectPlan = (plan) => {
    dispatch(selectedCurrentPlan(plan, plan.price));
  };

  const handleRenew = () => {
    if (!userData.id || !selectedPlans) {
      alert("Error: userData.id or selectedPlans is not defined");
      return;
    }
    dispatch(exportingSelectedPlan(userData.id, selectedPlans, navigate));
    dispatch(selectedCurrentPlan(null, 0));
  };

  const getUpgradeText = () => {
    switch (selectedPlans?.name) {
      case "OnAir Freemium":
        return "Watch 50+ live TV channels";
      case "OnAir Premium":
        return "Watch 200+ live TV channels";
      case "OnAir Premium 2":
        return "Watch 300+ live TV channels";
      default:
        return "Watch 50+ live TV channels";
    }
  };

  return (
    <div className={styles.sectionProfile}>
      <div className={styles.container}>
        <ProfileNavBar forWhich={"forPlans"} userData={userData} />
        <main className={styles.mainContent}>
          <h2 className={styles.title}>
            <FaList size={20} /> Plans
          </h2>
          <div className={styles.plansList}>
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`${styles.planItem} ${
                  selectedPlans?.id === plan.id ? styles.selected : ""
                }`}
                onClick={() => handleSelectPlan(plan)}
              >
                {plan.name} <span>{plan.price}$</span>
              </div>
            ))}
          </div>
          <div className={styles.renewSection}>
            <button className={styles.renewButton} onClick={handleRenew}>
              Change Plan
            </button>
            <p className={styles.total}>
              Total: <strong>{total}$</strong>
            </p>
          </div>

          <section className={styles.upgradeSection}>
            <h2 className={styles.upgradeSectionTitle}>Upgrade your service</h2>
            <div className={styles.plansList2}>
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`${styles.planItem2} ${
                    selectedPlans?.id === plan.id ? styles.selected2 : ""
                  }`}
                  onClick={() => handleSelectPlan(plan)}
                >
                  {plan.name}
                  <span>{plan.price}$</span>
                </div>
              ))}
            </div>
            <div className={styles.upgradeSectionMain}>
              <div className={styles.upgradeDetails}>
                <img src={logo} alt="logo" />
                <h3>{getUpgradeText()}</h3>
                <p>
                  Stream live TV Amet minim mollit non deserunt <br /> ullamco
                  est sit aliqua dolor do amet sint.
                </p>
                <div className={styles.tvMain}>
                  <div className={styles.tv}>
                    <img src={tv} alt="img" />
                  </div>
                  <div className={styles.tvTotal}>
                    <p className={styles.total2}>
                      <strong>{total == 0 ? "35" : total}$</strong>
                    </p>
                    <button className={styles.tvBtn} onClick={handleRenew}>
                      Change Plan
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.verticalLine}></div>
              <div className={styles.paymentMethods}>
                <h3>Your current service</h3>
                <p>{userData.selectedPlans?.name || "No Plan Selected"}</p>
                <div className={styles.total}>
                  <hr />
                  <div className={styles.totalText}>
                    Total: <span>{total}$</span>
                  </div>
                  <hr />
                </div>
                <h3>Payment With</h3>
                <button className={styles.pay}>
                  Pay via <img src={payPal} alt="" />
                </button>
                <button className={styles.pay}>
                  Pay via <img src={ecoPayz} alt="" />
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Plans;
