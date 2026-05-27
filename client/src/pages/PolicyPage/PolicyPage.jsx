import React from "react";
import styles from "./PolicyPage.module.scss";
const PolicyPage = () => {
  return (
    <section className={styles.privacySection}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.title}>
            <h1 className={styles.mainText}>Privacy Policy</h1>
            <p>
              Your privacy is important to us. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you
              visit our film website ERHAM.
            </p>
          </div>

          <ul className={styles.mainInfo}>
            <li className={styles.eachPrivacy}>
              <div className={styles.withLine}>
                <h2 className={styles.eachPrivacyTitle}>
                  1. Information We Collect
                </h2>
                <p>
                  We may collect personal information you voluntarily provide to
                  us such as your name, email address, and account preferences.
                  We may also collect non-personal information like browser
                  type, operating system, and pages visited.
                </p>
              </div>
              <div className={styles.withLine}>
                <h2 className={styles.eachPrivacyTitle}>
                  2. How We Use Your Information
                </h2>
                <ul>
                  <li>
                    1. To personalize your experience on the Site with tailored
                    content and suggestions
                  </li>
                  <li>2. To improve our website based on your feedback</li>
                  <li>
                    3. To send periodic emails or notifications (if subscribed)
                  </li>
                  <li>
                    4. To respond to customer service requests or support needs
                  </li>
                </ul>
              </div>
            </li>

            <li className={styles.eachPrivacy}>
              <div className={styles.withLine}>
                <h2 className={styles.eachPrivacyTitle}>
                  3. Sharing Your Information
                </h2>
                <p>
                  We do not sell, trade, or rent your personal information to
                  others. We may share generic aggregated demographic
                  information not linked to any personal identification with our
                  partners or advertisers for the purposes outlined above.
                </p>
              </div>
              <div className={styles.withLine}>
                <h2 className={styles.eachPrivacyTitle}>4. Cookies</h2>
                <p>
                  Our Site may use cookies to enhance the user experience. Your
                  web browser places cookies on your device for record-keeping
                  and sometimes to track information. You can choose to set your
                  browser to refuse cookies.
                </p>
              </div>
            </li>

            <li className={styles.eachPrivacy}>
              <div className={styles.withLine}>
                <h2 className={styles.eachPrivacyTitle}>
                  5. Third-Party Services
                </h2>
                <p>
                  We may use third-party services (e.g., analytics providers, ad
                  networks) that may collect and use information according to
                  their own privacy policies. We are not responsible for their
                  content or practices.
                </p>
              </div>
              <div className={styles.withLine}>
                <h2 className={styles.eachPrivacyTitle}>6. Data Security</h2>
                <p>
                  We adopt appropriate data collection, storage, and processing
                  practices and security measures to protect your personal
                  information against unauthorized access, alteration, or
                  destruction.
                </p>
              </div>
            </li>

            <li className={styles.eachPrivacy}>
              <div className={styles.withLine}>
                <h2 className={styles.eachPrivacyTitle}>7. Your Rights</h2>
                <p>
                  You have the right to access, update, or delete your personal
                  data. If you wish to exercise these rights, please contact us
                  at the email below.
                </p>
              </div>
              <div className={styles.withLine}>
                <h2 className={styles.eachPrivacyTitle}>
                  8. Changes to This Policy
                </h2>
                <p>
                  We reserve the right to update this Privacy Policy at any
                  time. Any changes will be posted on this page with an updated
                  "Last updated" date.
                </p>
              </div>
            </li>

            <li className={styles.eachPrivacy}>
              <div className={styles.withLine}>
                <h2 className={styles.eachPrivacyTitle}>9. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us at
                  <a
                    href="mailto:erikarshakyan555@gmail.com"
                    className={styles.emailText}
                  >
                    erikarshakyan555@gmail.com
                  </a>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PolicyPage;
