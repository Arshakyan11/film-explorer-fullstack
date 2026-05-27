import React from "react";
import styles from "./TermsOfUse.module.scss";
const TermsOfUse = () => {
  return (
    <section className={styles.termsSection}>
      <div className={styles.container}>
        <div className={styles.allContent}>
          <h1 className={styles.mainText}>Terms of Use</h1>
          <ul>
            <li className={styles.eachBoxTerm}>
              <h2 className={styles.eachBoxTermTextTitle}>
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using our film website ERHAM, you agree to be
                bound by these Terms of Use and our Privacy Policy. If you do
                not agree with any part of these terms, you must not use the
                Site.
              </p>
            </li>
            <li className={styles.eachBoxTerm}>
              <h2 className={styles.eachBoxTermTextTitle}>2. Use of Content</h2>
              <p>
                All content on this Site, including films, images, text, and
                logos, is owned or licensed by us. You may not reproduce,
                distribute, or display any content without our prior written
                consent.
              </p>
            </li>
            <li className={styles.eachBoxTerm}>
              <h2 className={styles.eachBoxTermTextTitle}>3. User Conduct</h2>
              <p>
                You agree not to use the Site for any unlawful purpose or to
                post or transmit any content that is harmful, offensive, or
                violates the rights of others.
              </p>
            </li>
            <li className={styles.eachBoxTerm}>
              <h2 className={styles.eachBoxTermTextTitle}>
                4. Account Responsibility
              </h2>
              <p>
                If you create an account on our Site, you are responsible for
                maintaining the confidentiality of your login credentials and
                for all activities that occur under your account.
              </p>
            </li>
            <li className={styles.eachBoxTerm}>
              <h2 className={styles.eachBoxTermTextTitle}>
                5. Third-Party Links
              </h2>
              <p>
                Our Site may contain links to third-party websites. We are not
                responsible for the content or privacy practices of these
                external sites.
              </p>
            </li>
            <li className={styles.eachBoxTerm}>
              <h2 className={styles.eachBoxTermTextTitle}>
                6. Disclaimer of Warranties
              </h2>
              <p>
                This Site is provided "as is" without warranties of any kind,
                either express or implied. We do not guarantee that the Site
                will be error-free or uninterrupted.
              </p>
            </li>
            <li className={styles.eachBoxTerm}>
              <h2 className={styles.eachBoxTermTextTitle}>
                7. Limitation of Liability
              </h2>
              <p>
                We shall not be liable for any indirect, incidental, special, or
                consequential damages arising from your use of the Site.
              </p>
            </li>
            <li className={styles.eachBoxTerm}>
              <h2 className={styles.eachBoxTermTextTitle}>
                8. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms of Use at any time.
                Changes will be effective immediately upon posting. Continued
                use of the Site constitutes acceptance of those changes.
              </p>
            </li>
            <li className={styles.eachBoxTerm}>
              <h2 className={styles.eachBoxTermTextTitle}>9. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us
                at
              <a
                href="mailto:erikarshakyan555@gmail.com"
                className={styles.emailText}
              >
                erikarshakyan555@gmail.com
              </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUse;
