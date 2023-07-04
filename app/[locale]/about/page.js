"use client";

import { useTranslations } from "next-intl";

// styles
import styles from "../../../styles/about.module.css";

// custom
import Nav from "../components/Nav";
import cv from "../components/cvData";
import ParallaxText from "./components/ParallaxText";
import Section from "./components/Section";

export default function About() {
  const { skills } = cv;
  const education = [1, 2, 3, 4, 5];
  const experience = [1, 2, 3, 4, 5];
  const languages = [1, 2];
  const recommendations = [1];

  const t = useTranslations("AboutPage");
  const tSkills = useTranslations("AboutPage.softSkills");

  return (
    <>
      <Nav />
      <main className={styles.main}>
        <Section>
          <p className={`${styles.quote} ${styles.about__quote}`}>{`"${t(
            "description"
          )}"`}</p>
        </Section>
        <Section>
          <h2 className={`${styles.heading} ${styles.heading__education}`}>
            {t("education")}
          </h2>
          <div className={styles.container__items}>
            {education &&
              education.map((item) => {
                return (
                  <div key={item} className={styles.container__item}>
                    <p className={styles.date}>
                      {t(`educationData.date${item}`)}
                    </p>
                    <div className={styles.container__text}>
                      <p className={styles.title}>
                        {t(`educationData.name${item}`)}
                      </p>
                      <p className={styles.place}>
                        {t(`educationData.place${item}`)}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </Section>
        <Section>
          <h2 className={`${styles.heading} ${styles.heading__experience}`}>
            {t("experience")}
          </h2>
          <div className={styles.container__items}>
            {experience &&
              experience.map((item) => {
                return (
                  <div key={item} className={styles.container__item}>
                    <p className={styles.date}>
                      {t(`experienceData.date${item}`)}
                    </p>
                    <div className={styles.container__text}>
                      <p className={styles.title}>
                        {t(`experienceData.name${item}`)}
                      </p>
                      <p>{t(`experienceData.place${item}`)}</p>
                      <p className={styles.desc}>
                        {t(`experienceData.description${item}`)}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </Section>
        <Section>
          <div className={styles.container__skills}>
            <div className={styles.container__skill}>
              <h2 className={styles.heading}>Hard Skills</h2>
              <ul className={styles.skills}>
                {skills &&
                  skills.map((skill, i) => {
                    return (
                      <li key={i} className={styles.skill}>
                        {skill}
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className={styles.container__skill}>
              <div>
                <h2 className={styles.heading}>Soft Skills</h2>
                <ul className={styles.skills}>
                  {[
                    "communication",
                    "empathy",
                    "teamWork",
                    "positive",
                    "flexibility",
                    "resilience",
                    "learning",
                    "creativity",
                  ].map((key) => {
                    return (
                      <li key={key} className={styles.skill}>
                        {tSkills(key)}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h2 className={styles.heading}>{t("languages")}</h2>
                <div className={styles.container__languages}>
                  {languages &&
                    languages.map((item) => {
                      return (
                        <div key={item} className={styles.language}>
                          <div className={styles.language__name}>
                            {t(`languagesData.language${item}`)}
                          </div>
                          <div className={styles.language__level}>
                            {t(`languagesData.level${item}`)}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section position={"last"}>
          <h2
            className={`${styles.heading} ${styles.heading__recommendations}`}
          >
            {t("aboutMe")}
          </h2>
          <div className={styles.container__quote}>
            {recommendations &&
              recommendations.map((item) => {
                return (
                  <>
                    <p key={item} className={styles.quote}>
                      {" "}
                      {'"' + t(`recommendationsData.text${item}`) + '"'}
                    </p>
                    <div className={styles.quote__person}>
                      <p>{t(`recommendationsData.name${item}`)}</p>
                      <p className={styles.p__quote}>
                        {t(`recommendationsData.company${item}`)}
                      </p>
                      <p className={styles.p__quote}>
                        {t(`recommendationsData.mail${item}`)}
                      </p>
                    </div>
                  </>
                );
              })}
          </div>
        </Section>
      </main>
      <ParallaxText baseVelocity={-3}>{t("about")}</ParallaxText>
    </>
  );
}
