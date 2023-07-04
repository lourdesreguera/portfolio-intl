import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
// styles
import styles from "../../../styles/dropdown.module.css";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ i }) => {
  const arrow = "/blackArrow.svg"
  const t = useTranslations('Navigation')
  
  const title = i.title
  return (
    <motion.li
      className={styles.li}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={i.href} className={styles.li__container} aria-label={`Ir a la página ${i.title}`}>
        <p>{t(`${title}`)}</p>
        <Image
          src={arrow}
          alt=""
          width={24}
          height={24}
          className={styles.arrow}
        />
      </Link>
    </motion.li>
  );
};
