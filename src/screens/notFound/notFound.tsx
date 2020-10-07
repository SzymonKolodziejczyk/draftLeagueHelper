import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./notFound.module.scss";
import Avatar from "@material-ui/core/Avatar";
import sadface from "../../sadface.svg";
import { Link } from "react-router-dom";
import { home } from "../../common/variables/routes";

export default function NotFound() {
  const { t } = useTranslation("NotFound");

  return (
    <div className={styles.div}>
      <span className={styles.span1}>404</span>
      <Avatar className={styles.avatar} src={sadface} />
      <span className={styles.span2}>{t("notfound")}</span>

      <span className={styles.span3}>{t("message")}</span>
      <span className={styles.span3}>
          <Link className={styles.link} to={home}>
            {t("link")}&nbsp;
          </Link>
      </span>
    </div>
  );
}
