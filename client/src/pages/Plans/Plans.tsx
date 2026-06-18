import { useEffect, useState } from "react";
import { FaList } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./Plans.module.scss";
import { ecoPayz, logo, payPal, tv } from "../../components/Images";
import ProfileNavBar from "../../components/ProfileNavBar/ProfileNavBar";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { allPlansInfo } from "../../store/PlansSlice/PlansSlice";
import { getUserInfo, setUserInfo } from "../../store/AuthSlice/AuthSlice";
import { useAsyncAction } from "../../hooks/useAsyncAction";
import {
  getAllPlansThunk,
  saveNewPlanOfAccountThunk,
} from "../../store/api/api";
import { ROUTES } from "../../routes/Routes";
import type { AllPlansResponseType } from "../../types/apiHandlingTypes";

const Plans = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const run = useAsyncAction();
  const { userInfo } = useAppSelector(getUserInfo);
  const { plansList } = useAppSelector(allPlansInfo);
  const [selectedPlan, setSelectedPlan] = useState<AllPlansResponseType>();
  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    dispatch(getAllPlansThunk());
  }, [dispatch]);

  const handleSelectPlan = async (plan: AllPlansResponseType) => {
    const result = await run({
      action: () =>
        dispatch(
          saveNewPlanOfAccountThunk({ subscriptionId: plan.id }),
        ).unwrap(),
      successMessage: (res) => res.message,
    });
    if (result && userInfo) {
      const updatedUser = {
        ...userInfo,
        subscription: plan,
      };
      dispatch(setUserInfo(updatedUser));
      localStorage.setItem("userInfo", JSON.stringify(updatedUser));
      navigate(`/${ROUTES.PROFILE}`);
    }
  };

  const selectPlan = (plan: AllPlansResponseType) => {
    setSelectedPlan(plan);
    setTotal(plan.price);
  };

  const getUpgradeText = () => {
    switch (selectedPlan?.id) {
      case "1":
        return "Watch 50+ live TV channels";
      case "2":
        return "Watch 200+ live TV channels";
      case "3":
        return "Watch 300+ live TV channels";
      default:
        return "Watch 50+ live TV channels";
    }
  };
  if (!userInfo) return null;

  return (
    <div className={styles.sectionProfile}>
      <div className={styles.container}>
        <ProfileNavBar forWhich={"forPlans"} userInfo={userInfo} />
        <main className={styles.mainContent}>
          <h2 className={styles.title}>
            <FaList size={20} /> Plans
          </h2>
          <div className={styles.plansList}>
            {plansList?.map((plan) => (
              <div
                key={plan.id}
                className={`${styles.planItem} ${
                  selectedPlan?.id === plan.id ? styles.selected : ""
                }`}
                onClick={() => selectPlan(plan)}
              >
                {plan.name} <span>{plan.price}$</span>
              </div>
            ))}
          </div>
          <div className={styles.renewSection}>
            <button
              disabled={!selectedPlan}
              className={styles.renewButton}
              onClick={() => selectedPlan && handleSelectPlan(selectedPlan)}
            >
              Change Plan
            </button>
            <p className={styles.total}>
              Total: <strong>{total}$</strong>
            </p>
          </div>

          <section className={styles.upgradeSection}>
            <h2 className={styles.upgradeSectionTitle}>Upgrade your service</h2>
            <div className={styles.plansList2}>
              {plansList?.map((plan) => (
                <div
                  key={plan.id}
                  className={`${styles.planItem2} ${
                    selectedPlan?.id === plan.id ? styles.selected2 : ""
                  }`}
                  onClick={() => selectPlan(plan)}
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
                      <strong>{total === 0 ? "35" : total}$</strong>
                    </p>
                    <button
                      disabled={!selectedPlan}
                      className={styles.tvBtn}
                      onClick={() =>
                        selectedPlan && handleSelectPlan(selectedPlan)
                      }
                    >
                      Change Plan
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.verticalLine}></div>
              <div className={styles.paymentMethods}>
                <h3>Your current service</h3>
                <p>{userInfo.subscription?.name || "No Plan Selected"}</p>
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
