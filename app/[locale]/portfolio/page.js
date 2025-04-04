"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";

// custom
import img1 from "../../../public/images/1.png";
import img2 from "../../../public/images/2.png";
import img3 from "../../../public/images/3.png";
import img4 from "../../../public/images/4.png";
import Nav from "../components/Nav";
import ImageComp from "./components/ImageComp";

// styles
import styles from "../../../styles/portfolio.module.css";

const images = [
  {
    id: 1,
    src: img4,
    title: "Good Bites",
    date: "#2025",
    tech: "Next.js",
    href: "https://goodbites.vercel.app//",
  },
  {
    id: 2,
    src: img3,
    title: "GRX",
    date: "#2023",
    tech: "Vue",
    href: "https://grx-metal.vercel.app/",
  },
  {
    id: 3,
    src: img2,
    title: "Slide Ink Studiø",
    date: "#2022",
    tech: "React.js",
    href: "https://slide-ink-studio-react.vercel.app/",
  },
  {
    id: 4,
    src: img1,
    title: "Kørriban",
    date: "#2022",
    tech: "React.js",
    href: "https://korriban-react-sass.vercel.app/",
  },
];

function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <header>
        <Nav />
      </header>
      <main>
        {images.map((image) => (
          <ImageComp id={image} key={image.id} />
        ))}
        <motion.div className={styles.progress} style={{ scaleX }} />
      </main>
    </div>
  );
}

export default Portfolio;
