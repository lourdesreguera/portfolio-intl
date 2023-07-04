"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { usePathname } from "next-intl/client";

// styles
import styles from '../../../styles/nav.module.css'

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event) {
    startTransition(() => {
      router.replace(`/${event.target.value}${pathname}`);
    });
  }

  return (
    <div className={styles.languageSelector}>
      <label>
        <select
          defaultValue={locale}
          disabled={isPending}
          onChange={onSelectChange}
          className={styles.select}
        >
          {["en", "es"].map((cur) => (
            <option key={cur} value={cur}>
              {t("locale", { locale: cur })}
            </option>
          ))}
        </select>
        <span></span>
      </label>
    </div>
  );
}
